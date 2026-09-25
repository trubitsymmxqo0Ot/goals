'use client';
import { HTMLAttributes, ReactNode } from "react"
import { AccordionProvider, useAccordion } from "./accordion-context";
import { Button, type ButtonVariants } from "../button/button";
import clsx from "clsx";

type AccrodionContentVariants = 'primary' | 'secondary' | 'tertiary' | 'elevated' | 'inverted';

interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

interface AccordionTriggerProps {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariants;
    fullWidth?: boolean;
    render?: () => ReactNode;
}

interface AccordionContentProps {
    children: ReactNode;
    className?: string;
    variants?: AccrodionContentVariants;
    render?: () => ReactNode;
}

const Body = ({ children, className, ...props }: AccordionBodyProps) => (
    <div
        className={className}
        {...props}
    >
        <AccordionProvider>
            {children}
        </AccordionProvider>
    </div>
)

const Trigger = ({
    children,
    className,
    fullWidth = true,
    variant = 'ghost',
    render
}: AccordionTriggerProps) => {
    const { open, setOpen } = useAccordion();
    if (render) {
        return (
            <Button
                fullWidth={fullWidth}
                variant={variant}
                className={className}
                onClick={() => setOpen(!open)}
            >
                {render()}
            </Button>
        )
    }
    return (
        <Button
            active={false}
            fullWidth={fullWidth}
            variant={variant}
            className={className}
            onClick={() => setOpen(!open)}
        >
            {children}
        </Button>
    )
}

const Content = ({ children, className, variants = 'primary', render }: AccordionContentProps) => {
    const { open } = useAccordion();
    const variantStyles = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
        elevated: 'bg-elevated',
        inverted: 'bg-color-bg-inverted',
    }[variants]

    if (render) {
        return (
            <div className={clsx(variantStyles, className)}>
                {render()}
            </div>
        )
    }

    return (
        <div className={clsx(variantStyles, className)}>
            {children}
        </div>
    )
}

export const Accordion = Body;
export const AccordionTrigger = Trigger;
export const AccordionContent = Content;