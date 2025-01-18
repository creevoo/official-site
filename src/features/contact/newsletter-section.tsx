import * as React from 'react'
import { NewsletterForm } from './newsletter-form'

export function NewsletterSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <h2 className="text-xl font-medium text-balance">
        Subscribe to our newsletter
      </h2>
      <p className="text-foreground/60 !leading-relaxed mt-3 text-pretty tablet:text-balance">
        Get the latest updates, tips, and exclusive offers from creevoo. So stay
        update while we're build something.
      </p>

      <div className="flex flex-col gap-5 mt-10">
        <NewsletterForm />

        <div className="flex items-center gap-x-6 gap-y-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer">
            <i className="fi fi-rr-check-circle text-green-600" />
            Weekly updates
          </span>
          <span className="flex items-center gap-2 text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer">
            <i className="fi fi-rr-check-circle text-green-600" />
            Exclsusive content
          </span>
          <span className="flex items-center gap-2 text-sm text-foreground/60 transition-all duration-300 hover:text-foreground cursor-pointer">
            <i className="fi fi-rr-check-circle text-green-600" />
            Early access for feature
          </span>
        </div>
      </div>
    </section>
  )
}
