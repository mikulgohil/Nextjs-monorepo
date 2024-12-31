import { HeroHeading } from '@repo/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <HeroHeading
        title="Start your free trial today"
        subtitle="Try Flowbite Platform for 30 days. No credit card required."
        ctaText="Free trial for 30 days"
        className="max-w-3xl mx-auto"
      />
    </main>
  )
} 