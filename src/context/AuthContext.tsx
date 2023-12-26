import React, { createContext, useContext, useEffect, useState } from "react";
import tokenAccess from "../utils/tokenAccess";
import { token } from "stylis";
import TokenService from "../utils/tokenAccess";

interface AuthContextType {
  user: User | null;
  isUserSignedIn: boolean;
  signIn: (credentials: Credentials, token: string) => void;
  signOut: () => void;
  checkUserSignInStatus : () => void;
  getUser : () => void;
}

interface User {
  email: string;
}

export interface Credentials {
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = (credentials: Credentials, token: string) => {
    const newUser: User = {
      email: credentials.email,
    };
    TokenService.saveToken(token);
    setUser(newUser);
    setIsUserSignedIn(true);
  };


  const signOut = () => {
    TokenService.removeToken();
    setUser(null);
    setIsUserSignedIn(false);
  };

  const checkUserSignInStatus = () => {
    const expired = TokenService.isTokenExpired();
  };

  const getUser = () => {
    const decoded = tokenAccess.decodeToken();
  };

  const contextValue: AuthContextType = {
    user,
    isUserSignedIn,
    signIn,
    signOut,
    checkUserSignInStatus,
    getUser
  };

  return (
    <AuthContext.Provider value={contextValue} >
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};