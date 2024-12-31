import { HeroHeading } from '@repo/ui'

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center p-24">
      <HeroHeading
        title="Start your free trial today"
        subtitle="Try Flowbite Platform for 30 days. No credit card required."
        ctaText="Free trial for 30 days"
        className="mx-auto max-w-3xl"
      />
    </main>
  )
}
