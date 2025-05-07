import { SectionLabel } from "@shared/components"
import { WaitlistForm } from "./waitlist-form"

export function HeroSection() {
  return (
    <section className="container mx-auto relative">
      <div className="flex flex-col items-center py-20 px-5 tablet:px-0">
        <div className="flex items-center gap-2">
          <SectionLabel>
            <i className="fi fi-sr-heart text-pink-500" />
            Unlimited inspiration for creator
          </SectionLabel>
        </div>

        <h2 className="text-4xl tablet:text-6xl font-semibold text-balance mt-10 leading-tight text-center">
          The creator library of <br className="hidden tablet:inline-flex" />
          templates & components
        </h2>

        <p className="text-foreground/70 leading-7 mt-10 text-pretty tablet:w-6/12 text-center">
          Beautifully crafted templates and components for your landing page,
          blog, portfolio and business sites. Built into different platforms.
          Easy to use and customize.
        </p>

        <div className="flex flex-col items-center mt-16 w-full tablet:w-4/12 gap-6">
          <p>Join the waiting list. No spam, no shit.</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
