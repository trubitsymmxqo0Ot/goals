"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { button_primititves } from "./button-primitives";
import { text } from "@/shared/primitives/text";
import { Icon } from "@/shared/assets";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "ghost"
  | "ghost_danger"
  | "danger"
  | "success";
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
  iconOnly?: boolean;
}

export const Button = ({
  className,
  children,
  variant = "primary",
  size = "m",
  fullWidth = false,
  disabled = false,
  isLoading = false,
  startContent,
  endContent,
  iconOnly,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  const defaultProps = {
    "data-disabled": disabled,
    "data-ghost": variant === "ghost" || variant === "ghost_danger",
    disabled: disabled,
    className: clsx(
      button_primititves({ size, variant }),
      fullWidth && "w-full",
      "focus:outline-warning focus:outline-2",
      !isDisabled
        ? "transition-transform active:scale-90 cursor-pointer"
        : "cursor-not-allowed",
      "inline-flex items-center gap-3",
      className,
    ),
  };

  if (iconOnly) {
    return (
      <button {...defaultProps} {...props}>
        {children}
      </button>
    );
  }

  return (
    <button {...defaultProps} {...props}>
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
