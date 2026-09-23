'use client';
import { ReactNode } from "react"
import { Button } from "../button/button";
import clsx from "clsx";
import { DrawerProvider, useDrawer } from "./drawer-context";
import Link from "next/link";

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
}

const Body = ({ children, ariaLabel, className }: DrawerProps) => {
    return (
        <div aria-label={ariaLabel} className={clsx('relative', className)}>
            <DrawerProvider>
                {children}
            </DrawerProvider>
        </div>
    )
}

const Trigger = ({ children, className }: GlobalDrawerProps) => {
    const { open, setOpen } = useDrawer();
    return (
        <Button
            variant="ghost"
            onClick={() => setOpen(!open)}
            className={clsx('z-20', className)}>
            {children}
        </Button>
    )
}

const Content = ({ children, className, offsetToParent = 105 }: DrawerContentProps) => {
    const { open } = useDrawer();
    return (
        <div className={clsx(
            open ? 'max-h-[9999px] h-fit p-2' : 'h-0',
            'bg-elevated border overflow-auto absolute z-10 left-1/2 -translate-x-1/2',
            className
        )}
            style={{
                top: `calc(100%+${offsetToParent})`
            }}
        >
            {children}
        </div>
    )
}

const Item = ({ children, className, href, render }: DrawerItemsProps) => {
    if (render) {
        return <div className={className}>{render()}</div>
    }
    return (
        <Link href={href || ''} className={className}>{children}</Link>
    )
}

Trigger.displayName = 'DrawerTrigger';
Content.displayName = 'DrawerContent';
Item.displayName = 'DrawerItem';
const DrawerCompound = Object.assign(Body, { Trigger, Content, Item });

const Drawer = DrawerCompound
export default Drawer;