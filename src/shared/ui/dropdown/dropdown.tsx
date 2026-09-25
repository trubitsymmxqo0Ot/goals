'use client';
import { HTMLAttributes, ReactNode } from "react"
import { Button, type ButtonVariants } from "../button/button";
import clsx from "clsx";
import { DropdownProvider, useDropdown } from "./dropdown-context";
import Link from "next/link";

type DropdownContentVariants = 'primary' | 'inverted' | 'ghost';

interface DropdownBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    ariaLabel?: string;
    className?: string;
}

interface DropdownTriggerProps {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariants;
    render?: () => ReactNode;
}

interface DropdownItemsProps {
    render?: () => ReactNode;
    className?: string;
    children?: ReactNode;
    href?: string;
    variant?: ButtonVariants;
}

interface DropdownContentProps {
    children: ReactNode;
    className?: string;
    offsetToParent?: number;
    variant?: DropdownContentVariants;
    isBorder?: boolean;
    render?: () => ReactNode;
}

const Body = ({ children, ariaLabel, className, ...props }: DropdownBodyProps) => (
        <div
            aria-label={ariaLabel}
            className={clsx('relative', className)}
            {...props}
        >
            <DropdownProvider>
                {children}
            </DropdownProvider>
        </div>
)

const Trigger = ({ children, className, render, variant = 'ghost' }: DropdownTriggerProps) => {
    const { open, setOpen } = useDropdown();

    if (render) {
        return (
            <Button
                variant={variant}
                onClick={() => setOpen(!open)}
                className={clsx('z-20', className)}
            >
                {render()}
            </Button>
        )
    }
    return (
        <Button
            variant={variant}
            onClick={() => setOpen(!open)}
            className={clsx('z-20', className)}
        >
            {children}
        </Button>
    )
}

const Content = ({
    children,
    className,
    offsetToParent = 0,
    isBorder = true,
    variant = 'inverted',
    render
}: DropdownContentProps) => {
    const { open } = useDropdown();
    const variantsBG = {
        primary: 'bg-primary',
        inverted: 'bg-secondary',
        ghost: '',
    }[variant];

    const variantsBorder = {
        primary: 'border border-primary',
        inverted: 'border border-secondary',
        ghost: '',
    }[variant]

    if (render) {
        return (
            <div className={clsx(
                open ? 'max-h-[9999px] h-fit p-2' : 'h-0 border-0',
                'min-w-50 max-w-70 transition-all overflow-auto absolute z-10 left-1/2 -translate-x-1/2',
                "flex flex-col text-center gap-2",
                isBorder ? variantsBorder : variantsBG,
                className
            )}
                style={{
                    top: `calc(100% + ${offsetToParent}px)`
                }}
            >
                {render()}
            </div>
        )
    }

    return (
        <div className={clsx(
            open ? 'max-h-[9999px] h-fit p-2' : 'h-0 border-0',
            'min-w-50 max-w-70 transition-all overflow-auto absolute z-10 left-1/2 -translate-x-1/2',
            "flex flex-col text-center gap-2",
            isBorder ? variantsBorder : variantsBG,
            className
        )}
            style={{
                top: `calc(100% + ${offsetToParent}px)`
            }}
        >
            {children}
        </div>
    )
}

const Item = ({ children, className, href, render, variant = 'danger' }: DropdownItemsProps) => {
    const globalStyles = 'hover:text-accent transition-colors text-color-primary block';
    const { setOpen } = useDropdown();
    if (render) {
        return <div role="button" onClick={() => setOpen(false)} className={clsx(globalStyles, className)}>{render()}</div>
    }

    if (!href) return <Button onClick={() => setOpen(false)} variant={variant} className={clsx('mt-7 text-center', className)}>{children}</Button>

    return (
        <Link onClick={() => setOpen(false)} href={href || ''} className={clsx(globalStyles, className)}>{children}</Link>
    )
}

export const Dropdown = Body;
export const DropdownTrigger = Trigger;
export const DropdownContent = Content;
export const DropdownItem = Item;