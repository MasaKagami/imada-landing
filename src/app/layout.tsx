// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/styles/font";

export const metadata: Metadata = {
  title: "Imada | Official Store",
  description: "Explore and shop Imada's products online through Watsons and Mannings.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const PIXEL_ID = "1858622251604114";

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}

        {/* Meta Pixel Code */}
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
