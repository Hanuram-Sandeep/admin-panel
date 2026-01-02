import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem("admin_auth");
    if (savedAuth) {
      const parsed = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setUser(parsed.user);
    }
  }, []);

  const login = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const userData = { email, name: "Admin User" };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem("admin_auth", JSON.stringify({ user: userData }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("admin_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
