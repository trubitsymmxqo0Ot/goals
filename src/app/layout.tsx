import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Планировщик задач",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body className="bg-primary text-color-primary h-dvh w-full">
        {children}
      </body>
    </html>
  );
}
