import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components"

export type FAQData = {
  question: string
  answer: string
}

type FAQItemProps = {
  position: number
  faq: FAQData
}

export function FAQItem({ faq, position }: FAQItemProps) {
  const { question, answer } = faq

  return (
    <AccordionItem value={`faq-${position}`}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
