import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "secondary" | "ghost" | "outline";
type ButtonSizes = "xl" | "l" | "m" | "s" | "t";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}

export const Button = ({
  onClick,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
