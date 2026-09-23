'use client';
import { createContext, ReactNode, useContext, useState } from "react";

interface DrawerContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface DrawerContextProps {
    children: ReactNode;
}

const DrawerContext = createContext<DrawerContextValue | null>(null);

export const useDrawer = () => {
    const ctx = useContext(DrawerContext)
    if(!ctx) throw new Error('Drawer provider must been with state');
    return ctx
}

export const DrawerProvider = ({children}: DrawerContextProps) => {
    const [open, setOpen] = useState(false);
    return <DrawerContext.Provider value={{open, setOpen}}>{children}</DrawerContext.Provider>
}