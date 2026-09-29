'use client';
import { text } from "@/shared/primitives/text";
import { SelectUser } from "./select-user";
import { GroupName } from "./group-name";
import { useEffect, useState } from "react";
import { UsersContext } from "@/shared/ui/select/select-context";

export interface IData {
    name: string;
    users: UsersContext[];
}

const LC_KEY = 'group-data' as const;

export const CreateField = () => {
    const [data, setData] = useState<IData>({ name: '', users: [] });

    useEffect(() => {
        const LCData = localStorage.getItem(LC_KEY);
        const data = JSON.parse(LCData) as IData;
        if(!data) {
            localStorage.setItem(LC_KEY, JSON.stringify(data));
        }
    }, [data])

    return (
        <section className="flex flex-col items-center gap-6 max-w-250 mx-auto">
            <h2 className={text({ size: '_3xl' })}>Создать группу</h2>
            <div className="bg-secondary w-full py-3 px-2 flex flex-col gap-6">
                <GroupName setData={setData} />
                <SelectUser setData={setData} data={data} />
            </div>
        </section>
    )
}