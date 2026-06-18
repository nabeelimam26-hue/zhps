import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { AppRouter } from './routes/AppRouter';
import { AuthProvider } from './auth';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
      <Analytics />
    </AuthProvider>
  </StrictMode>,
);
