import type { Metadata } from "next";
import StoreProvider from "@/lib/StoreProvider";
import "@/assets/index.scss";

export const metadata: Metadata = {
  title: "Family CookBook",
  description: "Сайт с домашними рецептами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
