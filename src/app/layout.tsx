import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JATLAD TECHNOLOGIES LIMITED',
  description:
    'A modern, full-spectrum tech and digital solutions company based in Nigeria. Software, infrastructure, cybersecurity, data services, and ICT training.',
  keywords: [
    'ICT',
    'Nigeria',
    'software development',
    'cybersecurity',
    'IT infrastructure',
    'data services',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
