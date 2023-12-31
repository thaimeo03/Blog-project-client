'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import AuthContextProvider from '@/app/(auth)/_components/AuthContextProvider'
import { ThemeProvider } from '@/components/ThemeProvider'

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
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </QueryClientProvider>
        </AuthContextProvider>
        <Toaster />
      </body>
    </html>
  )
}
