'use client';
import { Icon } from "@/shared/assets";
import { text } from "@/shared/primitives/text";
import { Select, SelectBody, SelectItem, SelectTrigger } from "@/shared/ui/select/select";
import { UsersContext } from "@/shared/ui/select/select-context";
import { useState } from "react";

const mockData: UsersContext[] = [
    {
        id: 'uuid-001',
        image: <Icon name='user' className="size-8 block rounded-full" />,
        name: 'Иван Иванов',
        skill: 'middle',
    },
    {
        id: 'uuid-002',
        image: <Icon name='user' className="size-8 block rounded-full" />,
        name: 'Сергей Сергеев',
        skill: 'junior',
    },
    {
        id: 'uuid-003',
        name: 'Владислав Лобзов',
        image: <Icon name='user' className="size-8 block rounded-full" />,
        skill: 'senior',
    },
    {
        id: 'uuid-004',
        name: 'Дмитрий Шатун',
        image: <Icon name='user' className="size-8 block rounded-full" />,
        skill: 'observer'
    },
    {
        id: 'uuid-05',
        name: "Владимир Слом Александрович",
        image: <Icon name="user" className="size-8 block rounded-full"/>,
        skill: 'middle',
    }
]

export const CreateField = () => {
    const [multiply, setMultiply] = useState(true);
    return (
        <section className="flex flex-col items-center gap-6 max-w-250 mx-auto">
            <h2 className={text({ size: '_3xl' })}>Создать группу</h2>
            <div className="bg-secondary w-full">
                <Select items={mockData} multiply={multiply}>
                    <SelectTrigger className="max-w-45"/>
                    <SelectBody>
                    {mockData.map(user => (
                        <SelectItem
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            skill={user.skill}
                            key={user.id}
                        />
                    ))}
                    </SelectBody>
                </Select>
            </div>
        </section>
    )
}