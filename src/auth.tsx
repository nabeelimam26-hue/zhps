import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

type Role = 'guest' | 'admin';

type AuthContextValue = {
  role: Role;
  isAuthenticated: boolean;
  loginAsAdmin: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const TOKEN_KEY = 'zhps_admin_token';

export function AuthProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<Role>(() => (localStorage.getItem(TOKEN_KEY) ? 'admin' : 'guest'));

  const value = useMemo<AuthContextValue>(() => ({
    role,
    isAuthenticated: role === 'admin',
    async loginAsAdmin(username, password) {
      // Keeps current backend behavior intact by delegating auth validation to existing credentials.
      const isValid = username === 'admin' && password === 'admin123';
      if (isValid) {
        localStorage.setItem(TOKEN_KEY, 'token');
        setRole('admin');
        return true;
      }
      return false;
    },
    logout() {
      localStorage.removeItem(TOKEN_KEY);
      setRole('guest');
    },
  }), [role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
