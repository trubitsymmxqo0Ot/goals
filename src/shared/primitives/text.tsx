import { tv } from "tailwind-variants";

export const text = tv({
  variants: {
    size: {
      t: "text-[10px] md:text-[12px]",
      s: "text-[12px] md:text-[14px]",
      m: "text-[14px] md:text-[16px]",
      l: "text-[16px] md:text-[18px]",
      xl: "text-[18px] md:text-[20px]",
      _2xl: "text-[20px] md:text-[22px]",
      _3xl: "text-[22px] md:text-[24px]",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
  },
});
