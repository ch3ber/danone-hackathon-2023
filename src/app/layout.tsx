import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import LoginBar from '@/components/LoginBar'
import NavBar from '@/components/NavBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Danone | Productos Eco',
  description: 'Nueva linea de productos de la industria ecologica'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body className={`${inter.variable} font-sans bg-general-bg text-brand-950 text-body`} >
        <LoginBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
