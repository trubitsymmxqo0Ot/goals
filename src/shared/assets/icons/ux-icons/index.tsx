import { FC } from "react";
import { SVGPropsIcon } from "../type";

export const spinner: FC<SVGPropsIcon> = ({
  size,
  className,
  width,
  height,
  name,
  ...props
}: SVGPropsIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width || size}
    height={height || size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    name={name}
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
