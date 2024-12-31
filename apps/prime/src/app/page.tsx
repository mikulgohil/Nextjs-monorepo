'use client'

import { HeroHeading } from '@repo/ui'
import type { FC } from 'react'

interface HomePageProps {} // Add future props here if needed

const Home: FC<HomePageProps> = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HeroHeading
        title="Start your free trial today"
        subtitle="Try Flowbite Platform for 30 days. No credit card required."
        ctaText="Free trial for 30 days"
        className="max-w-3xl mx-auto"
      />
      <div className='text-primary'>Hello</div>
    </main>
  )
}

export default Home