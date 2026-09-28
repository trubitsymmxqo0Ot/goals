"use client";
import { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { SelectProvider, SkillType, UsersContext, useSelect } from "./select-context";
import clsx from "clsx";
import { text } from "@/shared/primitives/text";
import { Icon } from "@/shared/assets";

type SelectTriggerVariants = 'ghost' | 'primary' | 'secondary';


interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
    variants?: SelectTriggerVariants;
    multiply?: boolean;
    items: UsersContext[];
}

interface SelectItemProps {
    className?: string;
    skill?: SkillType;
    name?: string;
    image?: ReactNode;
    id?: string;
    variant?: SelectTriggerVariants;
    render?: () => ReactNode;
}

interface SelectTriggerProps {
    className?: string;
    multiply?: boolean;
    title?: string;
}

interface SelectBodyProps {
    children: ReactNode;
    className?: string;
}

export const Select =
    ({
        children,
        className,
        variants = 'secondary',
        ariaLabel = 'Выбор пользователей',
        items,
        multiply = false,
        ...props
    }: SelectProps) => {

        const bodyStyles = {
            primary: 'bg-primary p-2',
            secondary: 'bg-secondary p-2',
            ghost: '',
        }[variants];


        return (
            <div
                role='select'
                className={clsx(
                    bodyStyles,
                    'cursor-pointer',
                    className)}
                aria-label={ariaLabel}
                {...props}
            >
                <SelectProvider users={items} multiply={multiply}>
                    {children}
                </SelectProvider>
            </div>
        )
    }


const Body = ({ className, children }: SelectBodyProps) => {
    const { isOpen } = useSelect();
    return (
        <div className={clsx(
            isOpen.open ? 'h-full py-1 px-3 mb-3' : 'h-0 overflow-hidden',
            className
        )}>{children}</div>
    )
}

const Trigger = ({ className, title = 'Выберите пользователя' }: SelectTriggerProps) => {
    const { isOpen, selected, multiply } = useSelect();

    const generalOptions = {
        icon: <Icon name='arrow' direction={isOpen.open ? 'up' : 'down'} className="size-5 transition-all" />,
        onClick: () => isOpen.setOpen(!isOpen.open),
        className: clsx("bg-color-tertiary/40 flex gap-2 items-center overflow-x-auto justify-center px-3", className),
        p: 'flex items-center gap-x-1 px-0.5 border border-primary',
    }

    const truncateFullName = (value: string) => {
        const fullName = value.split(' ');
        if (fullName.length > 2) {
            return `${fullName[0]} ${fullName[1][0]}. ${fullName[2][0]}.`;
        }

        return `${fullName[0]} ${fullName[1][0]}.`;
    }

    const handleDeleteSelectedUser = ({ user, e }: { user: string, e: MouseEvent }) => {
        e.stopPropagation();
        if (Array.isArray(selected.selectedUsers)) {
            const index = selected.selectedUsers.indexOf(user);
            const copy = [...selected.selectedUsers];
            copy.splice(index, 1);
            selected.setSelectedUsers(copy);
        }
        return;
    }

    if (multiply && Array.isArray(selected.selectedUsers)) {
        return (
            <div className={clsx("flex gap-3 p-2 w-fit", generalOptions.className)} onClick={generalOptions.onClick}>
                <div className={clsx('flex gap-3 overflow-x-auto scrollbar-none', className)}>
                    {selected.selectedUsers.length > 0 ? selected.selectedUsers.map((user, key) => (
                        <p key={key} className={clsx('shrink-0', generalOptions.p)} onClick={(e) => handleDeleteSelectedUser({ user, e })}>
                            <span>{truncateFullName(user)}</span>
                            <Icon name='cross' className="min-w-4 max-w-4 min-h-4 max-h-4 block" />
                        </p>
                    )) : <p>{title}</p>}
                </div>
                {generalOptions.icon}
            </div>
        )
    }

    return (
        <div onClick={generalOptions.onClick} className={generalOptions.className}>
            <p className={clsx(!selected.selectedUsers && '', generalOptions.p)}>{selected.selectedUsers || title}</p>
            {generalOptions.icon}
        </div>
    )
}

const Item = ({ className, render, variant = 'secondary', image, name, skill, id }: SelectItemProps) => {
    const { isOpen, selected, multiply } = useSelect();
    const skillStyles = {
        junior: 'text-junior-text',
        middle: 'text-middle-text',
        senior: 'text-senior-text',
        observer: 'text-observer-text',
    }[skill || 'junior']

    const triggerStyles = {
        ghost: '',
        primary: 'bg-primary border-secondary',
        secondary: 'bg-secondary border-primary',
    }[variant]

    const globalAttr = {
        className: clsx(
            triggerStyles,
            'cursor-pointer',
            'hover:bg-accent-hover/20 transition-colors',
            "flex items-center gap-3",
            className
        ),
    }

    //TODO: управление состоянием будет снаружи
    if (render) {
        return (
            <div
                className={globalAttr.className}
            >
                {render()}
            </div>
        )
    }

    const handleChangeSelectValue = (name: string) => {
        if (!multiply && name !== selected.selectedUsers) {
            selected.setSelectedUsers(name);
            isOpen.setOpen(false);
        }
        if (multiply && (!selected.selectedUsers.includes(name) || selected.selectedUsers.length === 0)) {
            selected.setSelectedUsers([...selected.selectedUsers, name]);
        }
        return;
    }

    return (
        <div
            onClick={() => handleChangeSelectValue(name || selected.selectedUsers[0])}
            className={globalAttr.className}
        >
            {image}
            <span className="flex flex-col">
                <span
                    className={clsx(
                        skill === 'observer' && 'text-danger',
                        text({ size: 'l' }))
                    }
                >
                    {name}
                </span>
                <span className={clsx('text-color-tertiary', text({ size: 's' }))}>
                    {id}
                </span>
            </span>
            <span className={clsx(skillStyles, "self-start")}>
                {skill}
            </span>
        </div>
    )
}

export const SelectTrigger = Trigger;
export const SelectBody = Body;
export const SelectItem = Item;