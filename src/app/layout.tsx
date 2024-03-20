import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/css/fontStyle.css";
import "/css/Uiverse.css";

import HeadBottom from "./components/HeadBottom";
import HeadTop from "./components/HeadTop";

const fontStyle = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Practice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontStyle.className}>
        <HeadTop />
        {children}
        <HeadBottom />
      </body>
    </html>
  );
}
