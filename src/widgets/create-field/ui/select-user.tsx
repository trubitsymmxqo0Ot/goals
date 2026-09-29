'use client';
import { text } from "@/shared/primitives/text"
import { Button } from "@/shared/ui/button/button"
import { Input } from "@/shared/ui/input/input"
import clsx from "clsx"
import { Dispatch, SetStateAction, useMemo, useState } from "react"
import { mockData } from "../model/data"
import { UserCard } from "./user-card"
import { IData } from "./create-field"

interface SelectUserProps {
    setData: Dispatch<SetStateAction<IData>>;
    data: IData;
}

export const SelectUser = ({ setData, data }: SelectUserProps) => {
    const [value, setValue] = useState('');
    const [mockUsers, setMockUsers] = useState(mockData);
    const [open, setOpen] = useState(true);

    const filteredUsers = useMemo(() => {
        return mockUsers.filter(filterUser => filterUser.name.toLowerCase().includes(value.toLowerCase()) || filterUser.id.toLowerCase().includes(value.toLowerCase()))
    }, [value, mockUsers])

    const handleChoiceUser = (id: string) => {
        setData((prev) => {
            const users = mockUsers.find(u => u.id === id);
            if (!users) return prev;
            return { ...prev, users: [...prev.users, users] };
        })
        setMockUsers((prev) => prev.filter(u => u.id !== id))
    }

    const handleDeleteUser = (id: string) => {
        setMockUsers((prev) => {
            const user = data.users.find(u => u.id === id);
            if (!user) return prev;
            return [user, ...prev];
        })
        setData(prev => ({ ...prev, users: [...prev.users.filter(u => u.id !== id)] }));
    }

    return (
        <>
            <h3 className={clsx('text-center', text({ size: 'xl' }))}>Выберите участников</h3>
            <Input
                className={clsx(text({ size: 'l' }),
                    'w-full border border-color-secondary/40 max-w-100 mx-auto py-1.5 px-2'
                )}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Введите имя или id пользователя"
            />
            <div className="flex flex-col gap-3">
                <div className="relative">
                    {data.users.length > 0 && (
                        <Button
                            onClick={() => setOpen(!open)}
                            size='m'
                            className="absolute top-0 right-0 z-20"
                            variant="secondary"
                        >
                            {open ? 'Скрыть' : 'Показать'}
                        </Button>
                    )}
                    <div className={clsx(
                        data.users.length !== 0 && 'max-h-100',
                        data.users.length !== 0 && 'border-color-tertiary border',
                        !open && 'h-7',
                        "flex flex-col gap-2 p-2 overflow-auto relative"
                    )}
                    >
                        <UserCard
                            data={data.users}
                            className="bg-deadline-month/10 hover:bg-deadline-month/20 border border-color-secondary"
                            handleToggleUser={handleDeleteUser}
                        />
                    </div>
                </div>
                {filteredUsers.length ? (
                    <UserCard handleToggleUser={handleChoiceUser} data={filteredUsers} />
                ) : (
                    data.users.length !== 0 && filteredUsers.length === 0 && (
                        <p
                            className={clsx('text-center text-color-tertiary', text({ size: 'l' }))}
                        >
                            <span className={text({ size: '_3xl' })}>🤔</span>
                            <br />
                            Такого пользователя не существует
                        </p>
                    )
                )
                }
            </div>
        </>
    )
}