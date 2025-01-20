import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shared/components'
import * as React from 'react'

export type FAQData = {
  question: string
  answer: string
}

type FAQItemProps = {
  position: number
  faq: FAQData
}

export function FAQItem({ faq, position }: FAQItemProps): React.ReactElement {
  const { question, answer } = faq

  return (
    <AccordionItem value={`faq-${position}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
