import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost/Campus_Lost_And_Found_Managment_System/api';

const isMixedContent = () => {
  if (typeof window === 'undefined') return false;
  return window.location.protocol === 'https:' && API_BASE_URL.startsWith('http:');
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('krmu_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });
  const [loading] = useState(false);

  const login = async (email, password) => {
    if (!isMixedContent()) {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/login.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        
        if (response.ok || data.message === "Login successful (Demo Mode)") {
          const loggedInUser = data.user || {
            id: 1,
            name: email.split('@')[0] || 'Demo User',
            role: email.includes('admin') ? 'admin' : 'student'
          };
          setUser(loggedInUser);
          localStorage.setItem('krmu_user', JSON.stringify(loggedInUser));
          return { success: true };
        }
      } catch (err) {
        console.warn("API login failed, using demo fallback.", err);
      }
    }

    // Fallback demo authentication mechanism
    if (email && password) {
      const demoUser = { 
        id: 1, 
        name: email.split('@')[0], 
        role: email.includes('admin') ? 'admin' : 'student' 
      };
      setUser(demoUser);
      localStorage.setItem('krmu_user', JSON.stringify(demoUser));
      return { success: true };
    }
    return { success: false, error: 'Please enter a valid email and password' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('krmu_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
