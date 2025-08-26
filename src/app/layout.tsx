// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/styles/font";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Imada | Official Store",
  description: "Explore and shop Imada's products online through Watsons.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-WZ07FNDD2K" />
      </body>
    </html>
  );
}
