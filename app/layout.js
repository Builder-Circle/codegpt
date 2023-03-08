'use client'
import Navbar from '@/component/Navbar'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
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
