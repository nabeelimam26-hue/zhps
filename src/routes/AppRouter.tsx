import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AdminPage } from '../pages/AdminPage';
import { LandingPage3D } from '../pages/LandingPage3D';
import { useAuth } from '../auth';

function ProtectedAdmin() {
  const { role } = useAuth();
  return role === 'admin' ? <AdminPage /> : <Navigate to="/" replace />;
}

const router = createBrowserRouter([
  { path: '/', element: <LandingPage3D /> },
  { path: '/admin', element: <ProtectedAdmin /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
