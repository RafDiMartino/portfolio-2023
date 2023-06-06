import Image from 'next/image'
import { Metadata } from 'next';
import { Hero } from './components/hero/Hero';

export const metadata = {
  title: 'Raf Di Martino | Portfolio',
  description: 'Portfolio site',
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between p-24">
      <Hero/>
    </main>
  )
}
