import { createContext, ReactNode, useContext } from "react";

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
    
}