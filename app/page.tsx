import Image from 'next/image'
import { Metadata } from 'next';

export const metadata = {
  title: 'Raf Di Martino | Portfolio',
  description: 'Portfolio site',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Portfolio</div>
    </main>
  )
}
