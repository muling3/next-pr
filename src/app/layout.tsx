import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Providers from "./providers";
import ThemeChanger from "./themeChanger";

const poppins = Poppins({ weight: "400", subsets: ["latin", "devanagari"] });
export const metadata: Metadata = {
  title: "Next Practise App",
  description: "Specifically for getting started with nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          <ThemeChanger></ThemeChanger>
          {children}
        </Providers>
      </body>
    </html>
  );
}
