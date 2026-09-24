'use client';
import { createContext, ReactNode, useContext, useState } from "react";

interface DropdownContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface DropdownContextProps {
    children: ReactNode;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => {
    const ctx = useContext(DropdownContext)
    if(!ctx) throw new Error('Dropdown provider must been with state');
    return ctx
}

export const DropdownProvider = ({children}: DropdownContextProps) => {
    const [open, setOpen] = useState(false);
    return <DropdownContext.Provider value={{open, setOpen}}>{children}</DropdownContext.Provider>
}