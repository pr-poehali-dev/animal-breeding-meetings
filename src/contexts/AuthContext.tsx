import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  email?: string;
  phone?: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (
    email: string,
    phone: string,
    username: string,
    password: string,
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (
    email: string,
    phone: string,
    username: string,
    password: string,
  ) => {
    // Симуляция регистрации
    const newUser: User = {
      id: Date.now().toString(),
      email: email || undefined,
      phone: phone || undefined,
      username,
    };
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
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
