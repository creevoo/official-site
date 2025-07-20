import { generatedMetadata } from "@shared/libs"
import { ContactSection, NewsletterSection } from "@features/contact"

export function meta() {
  return generatedMetadata({
    title: "Contact | Creevoo",
    description:
      "Connect and get in touch with us and give something to grow together",
  })
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20">
      <ContactSection />
      <NewsletterSection />
    </div>
  )
}
