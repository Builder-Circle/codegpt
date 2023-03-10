"use client";
import Navbar from "@/component/Navbar";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

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
        <title>CodeGPT</title>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider>
            <GoogleAnalytics trackPageViews />
            <Navbar />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
