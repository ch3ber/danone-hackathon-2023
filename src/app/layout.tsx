import './globals.css'
import { ReactNode } from 'react'

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
      <body>{children}</body>
    </html>
  )
}
