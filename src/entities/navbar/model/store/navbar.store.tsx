import { create } from "zustand";

interface IUseOpen {
    isOpen: boolean;
    open: VoidFunction;
    close: VoidFunction;
    toggle: VoidFunction;
}


export const useOpen = create<IUseOpen>((state) => ({
    isOpen: false,
    open: () => state({ isOpen: true }),
    close: () => state({ isOpen: false }),
    toggle: () => state((prev) => ({isOpen: !prev.isOpen}))
}))