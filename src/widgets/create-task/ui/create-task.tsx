'use client';
import { useOpen } from "@/entities/navbar"
import { text } from "@/shared/primitives/text"
import { Button } from "@/shared/ui/button/button"
import { cn } from "tailwind-variants"

export const CreateTask = () => {
    const setOpen = useOpen(state => state.toggle);
    const isOpen = useOpen(state => state.isOpen);
    return (
        <section>
            <h2 className={cn("text-center", text({size: '_2xl'}))}>Создать задачу</h2>
            <Button variant="primary" onClick={setOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</Button>
        </section>
    )
}