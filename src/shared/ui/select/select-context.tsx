import { createContext, ReactNode, useContext, useState } from "react";

export type SkillType = 'junior' | 'middle' | 'senior' | 'observer';

export interface UsersContext {
    id: string;
    image: ReactNode;
    name: string;
    skill: SkillType;
}

interface SelectContextValue {
    isOpen: {
        open: boolean;
        setOpen: (open: boolean) => void;
    },
    users: UsersContext[] | [];
    selected: {
        selectedUsers: string[] | string,
        setSelectedUsers: (name: string | string[]) => void;
    };
    multiply: boolean;
}

interface SelectContextProps {
    children: ReactNode;
    users: UsersContext[] | [];
    multiply?: boolean;
}

const SelectContext = createContext<SelectContextValue | null>(null);

export const useSelect = () => {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error('Select provder must been with context');
    return ctx;
}

export const SelectProvider = ({ children, multiply = false }: SelectContextProps) => {
    const [selectedUsers, setSelectedUsers] = useState<string[] | string>('');
    const [open, setOpen] = useState(false);

    const returendValues = {
        isOpen: {
            open,
            setOpen,
        },
        selected: {
            selectedUsers,
            setSelectedUsers,
        },
        users: [],
        multiply
    }

    return <SelectContext.Provider value={returendValues}>{children}</SelectContext.Provider>
}