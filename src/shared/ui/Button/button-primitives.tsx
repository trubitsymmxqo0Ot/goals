import { text } from "@/shared/primitives/text";
import clsx from "clsx";
import { cn, tv } from "tailwind-variants";

export const button_primititves = tv({
  variants: {
<<<<<<< HEAD
    base: "transition-colors duration-1000",
    variant: {
      primary: clsx(
        "bg-btn-primary",
        "data-[disabled=true]:bg-btn-primary-disabled data-[disabled=true]:opacity-60",
        "data-[disabled=false]:hover:bg-btn-primary-hover data-[disabled=false]:active:bg-primary-active",
        "text-btn-primary-text",
      ),
      secondary: clsx(
        "bg-btn-secondary text-btn-secondary-text",
        "data-[disabled=false]:hover:bg-btn-secondary-hover data-[disabled=false]:active:bg-btn-secondary-active",
        "data-[disabled=true]:opacity-60",
      ),
      ghost: clsx(
        "bg-btn-ghost-bg text-btn-ghost-text",
        "data-[disabled=true]:opacity-60 data-[disabled=true]:pointer-events-none",
      ),
      ghost_danger: clsx(
        "bg-btn-ghost-danger-bg text-btn-ghost-danger-text",
        "data-[disabled=false]:hover:bg-btn-ghost-danger-hover",
        "data-[disabled=false]:active:bg-btn-ghost-danger-active data-[disabled=false]:hover:text-btn-ghost-danger-hover-text",
        "data-[disabled=true]:opacity-60",
      ),
      danger: clsx(
        "bg-btn-danger-bg text-btn-danger-text",
        "data-[disabled=false]:hover:bg-btn-danger-hover data-[disabled=false]:active:bg-btn-danger-active",
        "data-[disabled=true]:opacity-60",
      ),
      success: clsx(
        "bg-btn-success-bg text-btn-success-text",
        "data-[disabled=false]:hover:bg-btn-success-hover data-[disabled=false]:active:bg-btn-success-active",
        "data-[disabled=true]:opacity-60",
=======
    variant: {
      primary: clsx(
        "bg-btn-primary hover:bg-btn-primary-hover active:bg-primary-active data-[disabled=true]:bg-btn-primary-disabled",
        "text-btn-primary-text ",
        "transition-colors duration-300",
>>>>>>> development
      ),
    },
    size: {
      t: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-0.5 data-[ghost=false]:px-1.5",
=======
        "py-0.5 px-1.5",
>>>>>>> development
        text.variants.size["t"],
        text.variants.weight["semibold"],
      ),
      s: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-1 data-[ghost=false]:px-2",
=======
        "py-1 px-2",
>>>>>>> development
        text.variants.size["s"],
        text.variants.weight["semibold"],
      ),
      m: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-1.5 data-[ghost=false]:px-3",
=======
        "py-1.5 px-3",
>>>>>>> development
        text.variants.size["m"],
        text.variants.weight["semibold"],
      ),
      l: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-2 px-3.5",
=======
        "py-2 px-3.5",
>>>>>>> development
        text.variants.size["l"],
        text.variants.weight["semibold"],
      ),
      xl: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-2 data-[ghost=false]:px-3.5",
=======
        "py-2 px-3.5",
>>>>>>> development
        text.variants.size["xl"],
        text.variants.weight["semibold"],
      ),
      _2xl: cn(
        "py-2 px-3.5",
        text.variants.size["_2xl"],
        text.variants.weight["semibold"],
      ),
      _3xl: cn(
<<<<<<< HEAD
        "data-[ghost=false]:py-2 data-[ghost=false]:px-3.5",
=======
        "py-2 px-3.5",
>>>>>>> development
        text.variants.size["_3xl"],
        text.variants.weight["semibold"],
      ),
    },
  },
});
