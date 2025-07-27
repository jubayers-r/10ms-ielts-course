import type { Metadata } from "next";
import "./globals.css";
import { inter, notoBengali } from "./fonts";

export const metadata: Metadata = {
  title: "10 Minute School",
  description: "Learn with 10 Minute School",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${notoBengali.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
