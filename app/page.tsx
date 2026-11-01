import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RouteTicker } from '@/components/route-ticker'
import { Services } from '@/components/services'
import { Fleet } from '@/components/fleet'
import { Industries } from '@/components/industries'
import { RoutesSection } from '@/components/routes-section'
import { WhyUs } from '@/components/why-us'
import { CtaBanner } from '@/components/cta-banner'
import { QuoteSection } from '@/components/quote-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RouteTicker />
        <Services />
        <Fleet />
        <Industries />
        <RoutesSection />
        <WhyUs />
        <CtaBanner />
        <QuoteSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
