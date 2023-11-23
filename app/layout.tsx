'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import AuthContextProvider from '@/app/(auth)/_components/AuthContextProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </AuthContextProvider>
        <Toaster />
      </body>
    </html>
  )
}
