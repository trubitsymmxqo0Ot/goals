import { createContext, useState } from "react";

interface ModalContextValue {
    setOpen: (open: boolean) => void;
    open: boolean;
}

interface ModalProvider {
    
}

export const ModalContext = createContext<ModalContextValue | null>(null);
export const useModal = () => {
    const ctx = createContext(ModalContext);
    if (!ctx) throw new Error("Modal provider must been with value");
    return ctx
}