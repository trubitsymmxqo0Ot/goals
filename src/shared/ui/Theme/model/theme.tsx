import { Icon } from "@/shared/assets";
import { JSX } from "react/jsx-runtime";
import { ThemeList } from "../providers/theme-provider";

interface ThemeListData {
  id: number;
  title: string;
  meta: ThemeList;
  icon: JSX.Element;
}

export const themeList: ThemeListData[] = [
  {
    id: 0,
    title: "Светлая тема",
    meta: "light",
    icon: <Icon name="light" size={22} />,
  },
  {
    id: 1,
    title: "Темная тема",
    meta: "dark",
    icon: <Icon name="dark" size={22} />,
  },
  {
    id: 2,
    title: "Очень темная тема",
    meta: "darker",
    icon: <Icon name="darker" size={22} />,
  },
];
