import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { AppRouter } from './routes/AppRouter';
import { AuthProvider } from './auth';
// Add this line to import ScrollFloat styles globally
import './components/ui/ScrollFloat.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
);
