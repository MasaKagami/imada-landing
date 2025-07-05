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
        {/* Google Analytics 4 for Imada */}
        <Script
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
              gtag('js', new Date());
              gtag('config', 'G-WZ07FNDD2K', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {
                  'custom_parameter_1': 'product_name',
                  'custom_parameter_2': 'product_conditions'
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}