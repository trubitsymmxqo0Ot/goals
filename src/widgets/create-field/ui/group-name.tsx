import { text } from "@/shared/primitives/text";
import { Input } from "@/shared/ui/input/input";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";
import { IData } from "./create-field";

interface GroupNameProps {
    setData: Dispatch<SetStateAction<IData>>;
}

export const GroupName = ({ setData }: GroupNameProps) => {
    const [name, setName] = useState('');

    const onChangeName = (value: string) => {
        setName(value);
        setData(prev => ({ ...prev, name: value }));
    }

    return (
        <div>
            <h3 className={clsx("text-center mb-6", text({ size: 'l' }))}>Название группы</h3>
            <Input
                className={clsx(
                    'border border-color-secondary/40 block', 
                    'w-full max-w-100 mx-auto py-1.5 px-2',
                    text({size: 'l'})
                )}
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
                placeholder="Введите название группы"
            />
        </div>
    )
}