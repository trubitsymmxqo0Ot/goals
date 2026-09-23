'use client';
import { createContext, ReactNode, useContext, useLayoutEffect, useState } from "react";

export type ThemeList = "light" | "dark" | "darker";

interface ThemeContextValue {
    theme: ThemeList;
    toggleTheme: (userTheme: ThemeList) => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('Theme provider must been with state');
    return ctx;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const DEFAULT_THEME = "light";
    const DEFAULT_KEY = 'theme';
    const [theme, setTheme] = useState<ThemeList>(DEFAULT_THEME);

    useLayoutEffect(() => {
        const currentTheme = localStorage.getItem(DEFAULT_KEY) as ThemeList;
        document.documentElement.setAttribute("data-custom-theme", currentTheme);
        setTheme(currentTheme);
    }, []);

    const toggleTheme = (userTheme: ThemeList) => {
        const themeLC = localStorage.getItem(DEFAULT_KEY);
        if(themeLC === userTheme) return;
        setTheme(userTheme);
        document.documentElement.setAttribute("data-custom-theme", userTheme);
        localStorage.setItem(DEFAULT_KEY, userTheme);
    }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}