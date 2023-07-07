import './globals.css'
import { Josefin_Sans, Playfair_Display, Fira_Mono } from 'next/font/google'
import { Header } from "./components/header/Header"
import { Footer } from './components/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans'
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

export const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  variable: '--font-fira-mono'
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
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#101518" />
      </head>
      <body className={`${josefinSans.variable} ${playfairDisplay.variable} ${firaMono.variable} flex flex-col min-h-screen`}>
      <Header />
        {children}
      <Footer />
      </body>
      
    </html>
  )
}
