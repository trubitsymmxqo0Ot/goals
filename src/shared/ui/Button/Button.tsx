"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { button_primititves } from "./button-primitives";
import { text } from "@/shared/primitives/text";
import { Icon } from "@/shared/assets";

type ButtonVariants = "primary";
type ButtonSizes = "xl" | "l" | "m" | "s" | "t" | "_2xl" | "_3xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  fullWidth?: boolean;
  isLoading?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

export const Button = ({
  className,
  children,
  variant = "primary",
  size = "m",
  fullWidth = false,
  disabled,
  isLoading = false,
  startContent,
  endContent,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-disabled={disabled}
      className={clsx(
        button_primititves({ size, variant }),
        fullWidth && "w-full",
        "cursor-pointer focus:outline-warning focus:outline-2",
        "transition-transform active:scale-90",
        "inline-flex items-center gap-3",
        className,
      )}
      {...props}
    >
      {startContent && !endContent && !isLoading && (
        <div className={text({ size })}>{startContent}</div>
      )}
      <span className="leading-none align-baseline">{children}</span>
      {endContent && !startContent && !isLoading && (
        <div className={text({ size })}>endContent</div>
      )}
      {isLoading && <Icon name="spinner" size={20} className="animate-spin" />}
    </button>
  );
};
