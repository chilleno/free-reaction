import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden gradient-green-y-bg py-32"
    >
      <Container className="relative py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Dive into a world where creativity knows no bounds. With Reaction Free, you can express yourself freely while staying within copyright guidelines.
          </p>
          <Button href="/login" color="white" className="mt-10">
            Start for free
          </Button>
        </div>
      </Container>
    </section>
  )
}
