'use client';
import { ReactNode } from "react"
import { Button } from "../button/button";
import clsx from "clsx";
import { DropdownProvider, useDropdown } from "./dropdown-context";
import Link from "next/link";

type DrawerContentVariants = 'primary' | 'inverted' | 'ghost';

interface DrawerProps {
    children: ReactNode;
    ariaLabel?: string;
    className?: string;
}

interface GlobalDrawerProps {
    children: ReactNode;
    className?: string;
}

interface DrawerItemsProps {
    render?: () => ReactNode;
    className?: string;
    children?: ReactNode;
    href?: string;
}

interface DrawerContentProps {
    children: ReactNode;
    className?: string;
    offsetToParent?: number;
    variant?: DrawerContentVariants;
    isBorder?: boolean;
}

const Body = ({ children, ariaLabel, className }: DrawerProps) => {
    return (
        <div aria-label={ariaLabel} className={clsx('relative', className)}>
            <DropdownProvider>
                {children}
            </DropdownProvider>
        </div>
    )
}

const Trigger = ({ children, className }: GlobalDrawerProps) => {
    const { open, setOpen } = useDropdown();
    return (
        <Button
            variant="ghost"
            onClick={() => setOpen(!open)}
            className={clsx('z-20', className)}>
            {children}
        </Button>
    )
}

const Content = ({ children, className, offsetToParent = 0, isBorder = true, variant = 'inverted' }: DrawerContentProps) => {
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

const Item = ({ children, className, href, render }: DrawerItemsProps) => {
    const globalStyles = 'hover:text-accent transition-colors text-color-primary block';
    const {setOpen} = useDropdown();
    if (render) {
        return <div role="button" onClick={() => setOpen(false)} className={clsx(globalStyles, className)}>{render()}</div>
    }

    if(!href) return <Button onClick={() => setOpen(false)} variant="danger" className={clsx('mt-7 text-center', className)}>{children}</Button>

    return (
        <Link onClick={() => setOpen(false)} href={href || ''} className={clsx(globalStyles, className)}>{children}</Link>
    )
}

Trigger.displayName = 'DrawerTrigger';
Content.displayName = 'DrawerContent';
Item.displayName = 'DrawerItem';
const Dropdown = Object.assign(Body, { Trigger, Content, Item });

export default Dropdown;