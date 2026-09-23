import { ReactNode, useState } from "react"
import { Button } from "../button/button";
import clsx from "clsx";

interface DrawerProps {
    children: ReactNode;
    ariaLabel?: string;
    className?: string;
}

interface GlobalDrawerProps {
    children: ReactNode;
    className?: string;
}

const Drawer = ({children, ariaLabel, className}: DrawerProps) => {
    return <div aria-label={ariaLabel} className={className}>{children}</div>
}

Drawer.Trigger = ({children, className}: GlobalDrawerProps) => {
    const [open, setOpen] = useState(false);
    return <Button variant="ghost" onClick={() => setOpen(!open)} className={className}>{children}</Button>
}

Drawer.Content = ({children, className}: GlobalDrawerProps) => {
    return <div className={clsx(
        open ? 'max-h-full' : 'h-0',
        className
    )}>{children}</div>
}

export default Drawer;