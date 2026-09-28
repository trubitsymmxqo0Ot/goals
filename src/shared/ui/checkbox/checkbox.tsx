'use client';
import { HTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    children: ReactNode;
    id: string;
    textStyle?: string;
}

export const Checkbox = ({ className, children, id, ...props }: CheckboxProps) => {
    return (
        <>
            <input type="checkbox" className={className} id={id} {...props} />
            <label htmlFor={id}>{children}</label>
        </>
    )

}