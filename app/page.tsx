import Image from 'next/image'
import { Hero } from './components/hero/Hero';
import { Hero3D } from './components/hero/Hero3D';

export const metadata = {
  title: 'Raf Di Martino | Portfolio',
  description: 'Portfolio site',
}

export default function Home() {
  return (
    <main className="bg-black flex flex-1 flex-col items-center justify-center">
      
      {/* <Hero3D /> */}
      <Hero/>

    </main>
  )
}
