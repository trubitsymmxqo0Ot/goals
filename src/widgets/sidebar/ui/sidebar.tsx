'use client';
import { useOpen } from "@/entities/navbar";
import clsx from "clsx";
import { MAX_WIDTH, MIN_WIDTH } from "../model/consts/sizes";
import { MouseEvent } from "react";

export const Sidebar = () => {
    const open = useOpen(state => state.isOpen);
    const currentWidth = open ? { minWidth: MIN_WIDTH } : { width: 0 }
    const handlePressDivider = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return (
        <section className={clsx(
            "h-screen min-w-0 max-w-250 bg-secondary",
            "absolute top-0 right-0 z-30",
            'transition-all duration-400',
        )}
            style={{
                maxWidth: MAX_WIDTH,
                ...currentWidth,
            }}
        >
            <div
                className="absolute h-full w-1 cursor-pointer"
                aria-label="Изменить размер блока"
            >
                <span className="h-10 w-full block rounded-xl bg-color-bg-inverted top-1/2 left-1 absolute opacity-50" />
            </div>
            <div className="pl-4">
                asdasdasd

            </div>
        </section>
    )
}