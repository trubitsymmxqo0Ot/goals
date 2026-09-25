import { createContext, ReactNode, useContext, useState } from "react";

interface AccrodionContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface AccordionProviderProps {
    children: ReactNode;
}

const AccrodionContext = createContext<AccrodionContextValue | null>(null);

export const useAccordion = () => {
    const ctx = useContext(AccrodionContext);
    if(!ctx) throw new Error('Accrodion must been with state');
    return ctx;
}

export const AccordionProvider = ({children}: AccordionProviderProps) => {
    const [open, setOpen] = useState(false);
    return <AccrodionContext.Provider value={{open, setOpen}}>{children}</AccrodionContext.Provider>
}