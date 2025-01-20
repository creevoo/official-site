import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-2">
        <SectionLabel>10+ Free templates</SectionLabel>
      </div>
      <h2 className="text-xl font-medium text-balance mt-4">
        The perfect website templates
        <br />
        for every needs
      </h2>
      <p className="text-foreground/60 !leading-relaxed mt-3 text-pretty tablet:text-balance">
        Beautifully crafted templates for your landing page, blog, portfolio and
        business. Built into different platforms. Easy to use and customize.
      </p>

      <div className="flex items-center mt-10">
        <Button
          className="transition-all duration-300 hover:-translate-y-1"
          asChild
        >
          <Link href={'/products'}>
            Explore templates
            <i className="fi fi-rr-angle-small-right" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
