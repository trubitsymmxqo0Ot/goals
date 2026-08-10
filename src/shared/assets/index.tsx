import { SVGProps } from "react";
import * as Icons from "./icons/index";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
  width?: number;
  height?: number;
}

export const Icon = ({
  name,
  size,
  className,
  width,
  height,
  ...props
}: IconProps) => {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;
  return (
    <IconComponent
      name={name}
      size={size}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};
