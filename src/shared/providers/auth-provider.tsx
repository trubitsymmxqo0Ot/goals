'use client';
import { REFRESH_KEY } from "@/shared/api/consts";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextValue {
    isAuth: boolean;    
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextValue | null>(null);
export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error('Auth provider must been with state');
    return ctx;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const searchToken = async () => {
            const token = await cookieStore.get(REFRESH_KEY);
            setIsAuth(!!token?.value);
        }
        searchToken();
    }, [])

    return <AuthContext.Provider value={{isAuth}}>{children}</AuthContext.Provider>
}