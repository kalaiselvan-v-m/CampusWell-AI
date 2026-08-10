import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem("cw_token");
    if (t) setToken(t);
    setReady(true);
  }, []);

  const login = (t) => {
    localStorage.setItem("cw_token", t);
    setToken(t);
  };
  const logout = () => {
    localStorage.removeItem("cw_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, ready, isAuthed: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
