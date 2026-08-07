import { text } from "@/shared/primitives/text";
import clsx from "clsx";
import { cn, tv } from "tailwind-variants";

export const button_primititves = tv({
  variants: {
    variant: {
      primary: clsx(
        "bg-btn-primary hover:bg-btn-primary-hover active:bg-primary-active data-[disabled=true]:bg-btn-primary-disabled",
        "text-btn-primary-text ",
        "transition-colors duration-300",
      ),
    },
    size: {
      t: cn(
        "py-0.5 px-1.5",
        text.variants.size["t"],
        text.variants.weight["semibold"],
      ),
      s: cn(
        "py-1 px-2",
        text.variants.size["s"],
        text.variants.weight["semibold"],
      ),
      m: cn(
        "py-1.5 px-3",
        text.variants.size["m"],
        text.variants.weight["semibold"],
      ),
      l: cn(
        "py-2 px-3.5",
        text.variants.size["l"],
        text.variants.weight["semibold"],
      ),
      xl: cn(
        "py-2 px-3.5",
        text.variants.size["xl"],
        text.variants.weight["semibold"],
      ),
      _2xl: cn(
        "py-2 px-3.5",
        text.variants.size["_2xl"],
        text.variants.weight["semibold"],
      ),
      _3xl: cn(
        "py-2 px-3.5",
        text.variants.size["_3xl"],
        text.variants.weight["semibold"],
      ),
    },
  },
});
