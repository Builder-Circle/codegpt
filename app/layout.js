'use client'
import Navbar from '@/component/Navbar'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>

      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='CodeGPT' />
        <meta name='author' content='CodeGPT' />
        <meta name='keywords' content='CodeGPT' />
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/favicon.ico' />
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
  )
}
