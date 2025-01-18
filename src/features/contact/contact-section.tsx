import Link from 'next/link'
import * as React from 'react'
import { ContactItem } from './contact-item'

export function ContactSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <h2 className="text-xl font-medium text-balance">
        Let's talk, we're here to help
      </h2>
      <p className="text-foreground/60 !leading-relaxed mt-3 text-pretty tablet:text-balance">
        We're help to help you with your project, so contact us with questions,
        feedback, or just to say hi.
      </p>

      <div className="flex mt-10">
        <ul className="flex flex-col gap-2">
          <ContactItem href={'mailto:nyomansunima@gmail.com'}>
            Send me email
          </ContactItem>
          <ContactItem href={'https://x.com/nyomansunima'}>
            Connect on twitter
          </ContactItem>
        </ul>
      </div>
    </section>
  )
}
