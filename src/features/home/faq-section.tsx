import { Accordion, SectionLabel } from '@shared/components'
import * as React from 'react'
import { FAQData, FAQItem } from './faq-item'
import * as motion from 'motion/react-client'

const faqs: FAQData[] = [
  {
    question: 'What platforms are available in each template?',
    answer:
      'Most of our templates are available on popular platforms like Webflow, Framer, and Wix. We also offer templates for platforms like Next.js, React, and Tailwind CSS.',
  },
  {
    question: 'Can I use these templates for commercial projects?',
    answer:
      'Yes, our templates are licensed for both personal and commercial use. However, redistribution or resale of the templates as-is is prohibited. Please review the specific licensing terms included with each template for more details.',
  },
  {
    question: 'Do you offer template customization services?',
    answer:
      'Yes, we provide customization services to help you tailor templates to your specific needs. If you’re interested, please reach out to us through our support page with your project details.',
  },
  {
    question: 'Do templates come with updates?',
    answer:
      'Yes, we provide updates for templates to ensure compatibility with platform changes or to fix issues. Updates are delivered automatically for templates purchased from platforms like Webflow or Framer.',
  },
  {
    question: 'Are the templates SEO-friendly?',
    answer:
      'Yes, our templates are optimized for SEO, including proper semantic structure, meta tags, and fast load times to ensure better search engine rankings.',
  },
]

export function FAQSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'linear' }}
      viewport={{ once: true, margin: '-10% 0px' }}
      className="flex flex-col"
    >
      <div className="flex items-center gap-2">
        <SectionLabel>FAQ</SectionLabel>
      </div>
      <h2 className="text-xl font-medium text-balance mt-4">
        Most asked questions
        <br />
        by folks
      </h2>
      <p className="text-foreground/60 !leading-relaxed mt-3 text-pretty target:text-balance">
        Get answers to commonly asked questions.
      </p>

      <div className="flex items-center mt-10">
        <Accordion
          type="single"
          collapsible={true}
          className="flex flex-col gap-2 w-full"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} position={index + 1} />
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
