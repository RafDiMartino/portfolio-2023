import Image from 'next/image'
import { Hero } from './components/hero/Hero';
import { Hero3D } from './components/hero/Hero3D';
import { Skills } from './components/skills/Skills';

export const metadata = {
  title: 'Raf Di Martino | Portfolio',
  description: 'Portfolio site',
}

export default function Home() {
  return (
    <main className="bg-primary flex flex-1 flex-col items-center justify-center px-4">
      
      {/* <Hero3D /> */}
      <Hero/>
      <Skills />
    </main>
  )
}
