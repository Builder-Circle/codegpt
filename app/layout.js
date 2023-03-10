"use client";
import Navbar from "@/component/Navbar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CodeGPT" />
        <meta name="author" content="CodeGPT" />
        <meta name="keywords" content="CodeGPT" />
        <meta name="theme-color" content="#000000" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
          
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <title>CodeGPT</title>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Navbar />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
