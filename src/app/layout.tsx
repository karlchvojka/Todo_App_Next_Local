
// CSS IMPORTS
import './globals.css'

// Next Imports
import { Inter } from 'next/font/google'

// Variable Declarations
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Karl Chvojka's Todo app`,
  description: 'Todo App using NextJS, and Typescript, Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
