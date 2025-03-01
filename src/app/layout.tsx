import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/styles/font";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Imada | Official Store",
  description: "Explore and shop Imada's products online through Watsons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZ07FNDD2K"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-WZ07FNDD2K');
            `,
          }}
        />
      </head>

      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
