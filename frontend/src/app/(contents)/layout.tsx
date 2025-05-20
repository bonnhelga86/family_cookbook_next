import type { Metadata } from "next";
import StoreProvider from "@/lib/StoreProvider";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "@/assets/index.scss";
import "./global.scss";

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
        <div className="page">
          <StoreProvider>
            <Header />
              <main className="content">
                {children}
              </main>
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
