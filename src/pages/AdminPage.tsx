import { useState } from 'react';
import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { useAuth } from '../auth';

type RequestItem = { id: number; type: 'Admission' | 'Application'; name: string; status: 'Pending' | 'Approved' | 'Rejected' };

const seed: RequestItem[] = [
  { id: 1, type: 'Admission', name: 'Aarav Kumar', status: 'Pending' },
  { id: 2, type: 'Application', name: 'Naina Singh', status: 'Pending' },
  { id: 3, type: 'Admission', name: 'Vihaan Das', status: 'Approved' },
];

export function AdminPage() {
  const { logout } = useAuth();
  const [rows, setRows] = useState(seed);

  const updateStatus = (id: number, status: RequestItem['status']) => {
    setRows((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen px-4 pb-16 pt-28 text-white sm:px-6">
        <section className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0e1834]/75 p-8 backdrop-blur-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#f2cf66]">Admin Dashboard</p>
              <h1 className="mt-2 font-display text-4xl">Request Management</h1>
            </div>
            <button onClick={logout} className="rounded-full border border-white/30 px-5 py-2 hover:bg-white/10">Logout</button>
          </div>
          <p className="mt-4 text-slate-300">Process admission and application workflows using approve/reject actions with audit-friendly statuses.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left">
              <thead><tr className="border-b border-white/15 text-sm text-slate-300"><th className="py-3">ID</th><th>Type</th><th>Name</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>{rows.map((row) => <tr key={row.id} className="border-b border-white/10"><td className="py-4">#{row.id}</td><td>{row.type}</td><td>{row.name}</td><td>{row.status}</td><td className="space-x-2"><button onClick={() => updateStatus(row.id, 'Approved')} className="rounded-lg bg-emerald-500/80 px-3 py-1 text-sm hover:bg-emerald-400">Approve</button><button onClick={() => updateStatus(row.id, 'Rejected')} className="rounded-lg bg-rose-500/80 px-3 py-1 text-sm hover:bg-rose-400">Reject</button></td></tr>)}</tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
