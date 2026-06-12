# ZHPS Full-Stack Upgrade Blueprint

This blueprint defines the migration path from the current static React/Vite landing app to a production-grade Next.js App Router application with PostgreSQL, Prisma, role-based authentication, notice uploads, and a searchable student directory.

## 1. Recommended stack

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | Next.js App Router | Unified frontend, route handlers, server actions, cache revalidation, protected layouts. |
| Database | PostgreSQL | Strong relational integrity for students, users, notices, and future administrative modules. |
| ORM | Prisma | Type-safe schema, generated client, migrations, and safe query composition. |
| Validation | Zod | Runtime request validation at API boundaries and form schema parity. |
| File storage | UploadThing or Cloudinary | Offloads PDFs/images from the app server and stores only signed/public URLs in PostgreSQL. |
| Authentication | NextAuth.js or Clerk | Session-backed role checks for `SUPER_ADMIN`, `STAFF`, and `STUDENT`. |
| Forms | react-hook-form + zod resolver | Low-render form state, consistent validation, and accessible errors. |

## 2. Target route and module structure

```txt
app/
  (public)/page.tsx
  admin/dashboard/layout.tsx
  admin/dashboard/notices/page.tsx
  admin/dashboard/students/page.tsx
  api/notices/route.ts
  api/notices/[id]/route.ts
  api/students/route.ts
  api/students/[id]/route.ts
components/
  admin/AdminSidebar.tsx
  admin/NoticeUploadForm.tsx
  admin/StudentDataTable.tsx
  public/LiveNoticeBoard.tsx
lib/
  auth.ts
  prisma.ts
  rbac.ts
  validations/notice.ts
  validations/student.ts
prisma/schema.prisma
```

## 3. RBAC policy

- `SUPER_ADMIN`: full access to notices, students, staff management, destructive deletes, and future modules.
- `STAFF`: can create notices and read/search students; cannot delete notices or create/delete students unless explicitly granted later.
- `STUDENT`: can access public/read-only student-facing views only.
- Guest users: public landing page and public notice board only.

All protected modules need both:

1. **Frontend protection** with a server-rendered dashboard layout that checks the authenticated session before rendering.
2. **Backend protection** inside each route handler/server action so direct HTTP calls cannot bypass UI guards.

## 4. API architecture

### Notice management

| Method | Route | Access | Behavior |
| --- | --- | --- | --- |
| `POST` | `/api/notices` | `SUPER_ADMIN`, `STAFF` | Validates title/content/category/file URL and creates a notice owned by the session user. |
| `GET` | `/api/notices?page=1&limit=5&category=URGENT` | Public | Returns paginated notices ordered by `createdAt desc`; optional category filter. |
| `DELETE` | `/api/notices/[id]` | `SUPER_ADMIN` | Deletes notice metadata. Optionally also delete file from storage provider. |

### Student directory

| Method | Route | Access | Behavior |
| --- | --- | --- | --- |
| `GET` | `/api/students?page=1&limit=20&name=ali&rollNumber=12&gradeLevel=10&status=ACTIVE` | `SUPER_ADMIN`, `STAFF` | Server-side pagination, global name search, roll number search, grade/status filters. |
| `POST` | `/api/students` | `SUPER_ADMIN` | Creates a validated student record with unique student and grade/section/roll constraints. |
| `PATCH` | `/api/students/[id]` | `SUPER_ADMIN`, `STAFF` with policy | Updates student profile/status; destructive actions should remain `SUPER_ADMIN`. |

## 5. Notice validation contracts

```ts
import { z } from 'zod';

export const noticeCategorySchema = z.enum(['ACADEMIC', 'URGENT', 'EVENT', 'GENERAL']);

export const createNoticeSchema = z.object({
  title: z.string().trim().min(3).max(160),
  content: z.string().trim().min(10).max(5000),
  category: noticeCategorySchema.default('GENERAL'),
  fileUrl: z.string().url().optional().or(z.literal('')).transform((value) => value || undefined),
});

export const listNoticesSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  category: noticeCategorySchema.optional(),
});
```

## 6. Notice upload API route implementation

```ts
// app/api/notices/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { getCurrentUser, requireRole } from '@/lib/rbac';
import { createNoticeSchema, listNoticesSchema } from '@/lib/validations/notice';

export async function GET(request: NextRequest) {
  const parsed = listNoticesSchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid notice query', issues: parsed.error.flatten() }, { status: 400 });
  }

  const { page, limit, category } = parsed.data;
  const where = category ? { category } : {};
  const [items, total] = await Promise.all([
    prisma.notice.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
      include: { author: { select: { id: true, name: true, role: true } } },
    }),
    prisma.notice.count({ where }),
  ]);

  return NextResponse.json({ items, meta: { page, limit, total, pageCount: Math.ceil(total / limit) } });
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  const forbidden = requireRole(user, ['SUPER_ADMIN', 'STAFF']);
  if (forbidden) return forbidden;

  const body = await request.json();
  const parsed = createNoticeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid notice payload', issues: parsed.error.flatten() }, { status: 400 });
  }

  const notice = await prisma.notice.create({
    data: { ...parsed.data, authorId: user.id },
    include: { author: { select: { id: true, name: true, role: true } } },
  });

  revalidatePath('/');
  revalidatePath('/admin/dashboard/notices');
  return NextResponse.json({ notice }, { status: 201 });
}
```

```ts
// app/api/notices/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { getCurrentUser, requireRole } from '@/lib/rbac';

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  const forbidden = requireRole(user, ['SUPER_ADMIN']);
  if (forbidden) return forbidden;

  const { id } = await params;
  await prisma.notice.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath('/admin/dashboard/notices');
  return NextResponse.json({ ok: true });
}
```

## 7. RBAC helper implementation

```ts
// lib/rbac.ts
import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import type { Role } from '@prisma/client';

export async function getCurrentUser() {
  const session = await auth();
  if (!session?.user?.email) return null;
  return prisma.user.findUnique({ where: { email: session.user.email }, select: { id: true, email: true, name: true, role: true } });
}

export function requireRole(user: { role: Role } | null, allowed: Role[]) {
  if (!user) return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  if (!allowed.includes(user.role)) return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
  return null;
}
```

## 8. Admin notice upload form

```tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNoticeSchema } from '@/lib/validations/notice';
import type { z } from 'zod';

type NoticeFormValues = z.input<typeof createNoticeSchema>;

type UploadedFile = { url: string; name: string };

export function NoticeUploadForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [serverError, setServerError] = useState('');

  const form = useForm<NoticeFormValues>({
    resolver: zodResolver(createNoticeSchema),
    defaultValues: { title: '', content: '', category: 'GENERAL', fileUrl: '' },
  });

  async function handleUpload(file: File) {
    setServerError('');
    const body = new FormData();
    body.append('file', file);

    // Replace this endpoint with UploadThing or Cloudinary signed-upload integration.
    const response = await fetch('/api/uploads/notices', { method: 'POST', body });
    if (!response.ok) throw new Error('File upload failed. Please try again.');
    const result = (await response.json()) as UploadedFile;
    setUploadedFile(result);
    form.setValue('fileUrl', result.url, { shouldValidate: true, shouldDirty: true });
  }

  async function onSubmit(values: NoticeFormValues) {
    setServerError('');
    const response = await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null);
      setServerError(payload?.error ?? 'Unable to publish notice.');
      return;
    }

    form.reset();
    setUploadedFile(null);
    startTransition(() => router.refresh());
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
      <div>
        <label htmlFor="title" className="text-sm font-medium text-slate-100">Notice title</label>
        <input id="title" {...form.register('title')} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
        {form.formState.errors.title && <p className="mt-1 text-sm text-rose-300">{form.formState.errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="category" className="text-sm font-medium text-slate-100">Category</label>
        <select id="category" {...form.register('category')} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <option value="GENERAL">General</option>
          <option value="ACADEMIC">Academic</option>
          <option value="URGENT">Urgent</option>
          <option value="EVENT">Event</option>
        </select>
      </div>

      <div>
        <label htmlFor="content" className="text-sm font-medium text-slate-100">Notice content</label>
        <textarea id="content" rows={6} {...form.register('content')} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3" />
        {form.formState.errors.content && <p className="mt-1 text-sm text-rose-300">{form.formState.errors.content.message}</p>}
      </div>

      <div className="rounded-2xl border border-dashed border-white/20 p-5">
        <label htmlFor="notice-file" className="block cursor-pointer text-sm text-slate-200">
          Upload optional PDF/image attachment
          <span className="mt-1 block text-xs text-slate-400">PDF, PNG, JPG, or WEBP. Store in UploadThing/Cloudinary and save only the returned URL.</span>
        </label>
        <input
          id="notice-file"
          type="file"
          accept="application/pdf,image/png,image/jpeg,image/webp"
          className="mt-3 text-sm"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) void handleUpload(file).catch((error) => setServerError(error.message));
          }}
        />
        {uploadedFile && <p className="mt-2 text-sm text-emerald-300">Attached: {uploadedFile.name}</p>}
      </div>

      {serverError && <p className="rounded-xl bg-rose-500/10 p-3 text-sm text-rose-200">{serverError}</p>}

      <button disabled={form.formState.isSubmitting || isPending} className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 disabled:opacity-60">
        {form.formState.isSubmitting || isPending ? 'Publishing…' : 'Publish notice'}
      </button>
    </form>
  );
}
```

## 9. Public live notice board integration

```tsx
'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export function LiveNoticeBoard() {
  const { data, isLoading, error } = useSWR('/api/notices?limit=5', fetcher, { refreshInterval: 60_000 });

  if (isLoading) return <p>Loading latest notices…</p>;
  if (error) return <p>Unable to load notices right now.</p>;

  return (
    <section aria-labelledby="notice-board-title">
      <h2 id="notice-board-title">Latest Notices</h2>
      <ul>
        {data.items.map((notice: { id: string; title: string; category: string; createdAt: string }) => (
          <li key={notice.id}>
            <span>{notice.category === 'URGENT' ? 'Urgent' : notice.category}</span>
            <strong>{notice.title}</strong>
            <time dateTime={notice.createdAt}>{new Date(notice.createdAt).toLocaleDateString()}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

## 10. Execution plan

1. Create the Next.js App Router project shell or migrate the current Vite `src/components` into `components` and `app/(public)/page.tsx`.
2. Install dependencies: `next`, `@prisma/client`, `prisma`, `zod`, `next-auth` or Clerk packages, `react-hook-form`, `@hookform/resolvers`, and the selected upload provider SDK.
3. Configure `DATABASE_URL`, auth secrets, and upload provider keys in environment variables.
4. Add `prisma/schema.prisma`, run `npx prisma migrate dev --name init-admin-student-notices`, then generate the client.
5. Implement `lib/prisma.ts`, auth configuration, and RBAC helpers.
6. Build `GET/POST /api/notices`, then wire `NoticeUploadForm` into `/admin/dashboard/notices`.
7. Build `GET/POST/PATCH /api/students` and connect the server-side paginated student table.
8. Add the public `LiveNoticeBoard` to the landing page, fetching `/api/notices?limit=5`.
9. Add integration tests for route authorization, validation failures, and pagination contracts.
10. Deploy with a managed Postgres instance and configure object storage CORS/allowed upload types.
