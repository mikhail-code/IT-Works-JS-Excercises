import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/user";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {}, // TODO
  logout: () => {}, // TODO
});

interface AuthContextType {
  user: User | null; 
  isAuthenticated: boolean; 

  login: (user: User) => void; // TODO
  logout: () => void; // TODO
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const initialUserState: User = { name: "Guest" }; 
  const [user, setUser] = useState<User>(initialUserState); 

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const loginHandler = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setUser(initialUserState);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
