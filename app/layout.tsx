import './globals.css'
import { Josefin_Sans, Playfair_Display, Fira_Mono, Montserrat, Cormorant_Garamond, Lato } from 'next/font/google'
import { Header } from "./components/header/Header"
import { Footer } from './components/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const header = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-header'
})

export const body = Lato({
  weight: ["400", "300", "700"],
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata = {
  title: 'Raf Di Martino | Portfolio',
  description: 'Portfolio site',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <meta name="theme-color" content="#101518" />
      </head>
      <body className={`${header.variable} ${body.variable} flex flex-col min-h-screen`}>
      <Header />
        {children}
      <Footer />
      </body>
      
    </html>
  )
}
