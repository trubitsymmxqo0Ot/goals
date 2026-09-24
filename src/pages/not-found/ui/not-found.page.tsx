import { Button } from "@/shared/ui/button/button"
import Link from "next/link"

export const NotFoundPage = () => {
    return (
        // TODO: код временный, после определения общих стилей для таблицы тасок not found будет исправлен
        <section className="flex flex-col items-center h-[calc(100vh-100px)] justify-center">
            <label className="text-[180px] leading-none mb-3 relative flex gap-27">
                <span>4</span>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce">0</span>
                <span>4</span>
                </label>
            <h2 className="text-5xl font-bold text-center mb-10">К сожалению, <br/> страницу не удалось найти</h2>
            <Button variant="success" size='_2xl' className="rounded-xl">
                <Link href='/'>Назад к задачам</Link>
            </Button>
        </section>
    )
}