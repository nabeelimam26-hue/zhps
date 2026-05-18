import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminPage } from '../pages/AdminPage';
import { LandingPage } from '../pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
