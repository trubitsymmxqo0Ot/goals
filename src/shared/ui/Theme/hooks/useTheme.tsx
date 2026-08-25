import { useLayoutEffect, useState } from "react";

export type ThemeList = "light" | "dark" | "darker";
const isServer = typeof window === "undefined";

export const useTheme = () => {
  const DEFAULT_THEME = "light";
  const [theme, setTheme] = useState<ThemeList>(
    isServer ? DEFAULT_THEME : (localStorage.getItem("theme") as ThemeList),
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-custom-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
