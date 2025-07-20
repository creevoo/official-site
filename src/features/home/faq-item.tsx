import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components"

export interface FAQData {
  question: string
  answer: string
}

interface FAQItemProps {
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
