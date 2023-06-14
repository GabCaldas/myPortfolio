import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({ subsets: ['latin'],
weight:['300','400','500','600']})

export const metadata = {
  title: 'Gabriel Caldas',
  description: 'Portifólio de Gabriel Caldas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
