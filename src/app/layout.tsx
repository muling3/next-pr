import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
