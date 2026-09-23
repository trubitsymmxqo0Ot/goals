import type { Metadata } from "next";
import "../shared/primitives/globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Планировщик задач",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body className="bg-primary text-color-primary h-dvh w-full">
        {children}
      </body>
    </html>
  );
}
