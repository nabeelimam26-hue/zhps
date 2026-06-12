import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AdminPage } from '../pages/AdminPage';
import { LandingPage } from '../pages/LandingPage';
import { useAuth } from '../auth';

function ProtectedAdmin() {
  const { role } = useAuth();
  return role === 'admin' ? <AdminPage /> : <Navigate to="/" replace />;
}

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/admin', element: <ProtectedAdmin /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
