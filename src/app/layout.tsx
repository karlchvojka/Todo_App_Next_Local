
// CSS IMPORTS
import './globals.css'

// Next Imports
import { Inter } from 'next/font/google'

// Variable Declarations
/**
 * Integer declaratios
 */
const inter = Inter({ subsets: ['latin'], preload: true })

/**
 * metadata declarations for SEO
 */
export const metadata = {
  title: `Karl Chvojka's Todo app`,
  description: 'Todo App using NextJS, and Typescript, Material UI',
}

/**
 * Root Layout
 * @param { children } object Everything to build the app. 
 */
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
