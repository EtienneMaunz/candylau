import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { checkAuth } from "../services/authentication_service";

interface AuthContextProps {
  isAuthenticated: boolean;
  checkAuthStatus: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  checkAuthStatus: () => {},
});

export const AuthContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = () => {
    checkAuth()
      .then((response) => {
        setIsAuthenticated(response.data.isAuthenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
