import { Button } from "@/shared/ui/button/button";
import { UsersContext } from "@/shared/ui/select/select-context";
import { ReactNode } from "react";
import { grades } from "../model/grades";
import { Icon } from "@/shared/assets";
import clsx from "clsx";

interface UserCardProps<T> {
    className?: string;
    data: UsersContext[];
    handleToggleUser?: (id: string) => void;
}

export const UserCard = <T,>({ className, data, handleToggleUser }: UserCardProps<T>) => {
    return (
        <>
            {data.map(user => (
                <Button
                    variant="ghost"
                    key={user.id}
                    onClick={() => handleToggleUser?.(user.id)}
                    className={clsx(
                        "flex active:scale-99 text-color-primary",
                        "items-start py-3 px-2 hover:bg-color-tertiary/15",
                        className
                    )}
                    startContent={
                        <span>
                            {user.image ? user.image : <Icon name='user' className="size-8 block rounded-full" />}
                        </span>
                    }
                    endContent={
                        <span className={clsx('font-bold', grades[user.skill])}>
                            {user.skill}
                        </span>
                    }
                >
                    <span className="flex flex-col text-left gap-1.5">
                        <span>{user.name}</span>
                        <span className="text-color-tertiary">{user.id}</span>
                    </span>
                </Button>
            ))}
        </>
    )
}