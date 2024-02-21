import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        {
          /* commented like this to keep the order */
          /* <SecondaryFeatures /> */
        }

        {
          /* commented like this to keep the order */
          /* <Testimonials /> */
        }
        <Pricing />
        <Faqs />
        <CallToAction />
        <div className="fixed bottom-4 left-4 flex justify-center items-center cursor-pointer z-40">
          <a href="https://www.producthunt.com/posts/reaction-free?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-reaction&#0045;free" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440836&theme=light" alt="Reaction&#0032;Free - Create&#0032;react&#0032;content&#0032;without&#0032;fear&#0032;of&#0032;copyright&#0032;infringement&#0046; | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" /></a>
        </div>
      </main>
      <Footer />
    </>
  )
}
