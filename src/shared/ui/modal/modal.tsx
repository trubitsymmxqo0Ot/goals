'use client';

import clsx from "clsx";
import { HTMLAttributes, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext, useModal } from "./modal-context";
import { Icon } from "@/shared/assets";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    gap: number;
}

interface ModalHeaderProps {
    children: ReactNode;
    className?: string;
}

export const Modal = ({ children, className, gap, ...props }: ModalProps) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            setOpen(false);
        })
    }, [])
    return (
        createPortal(
            <ModalContext.Provider value={{open, setOpen}}>
            <div
                className={clsx(
                    'flex flex-col', 
                    'bg-secondary p-4',
                    className
                )}
                style={{ columnGap: gap }}
                {...props}
            >
                {children}
            </div>
            </ModalContext.Provider>,
            document.body
        )
    )
}

export const ModalHeader = ({ children, className }: ModalHeaderProps) => {
    return (
        <div className={clsx('relative', className)}>
            {children}
            <Icon name='cross' className="size-4 absolute top-4 right-4" aria-label="close modal"/>
        </div>
    )
}