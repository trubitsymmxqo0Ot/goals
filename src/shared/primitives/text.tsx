import { tv } from "tailwind-variants";

const general = tv({
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
      thin: 100,
      light: 300,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
});
