import { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"
import { ContactSection, NewsletterSection } from "@features/contact"

export const metadata: Metadata = {
  title: "Contact | Creevoo",
  description:
    "Connect and get in touch with us and give something to grow together",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Contact | Creevoo",
    description:
      "Connect and get in touch with us and give something to grow together",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Contact | Creevoo",
    description:
      "Connect and get in touch with us and give something to grow together",
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20">
      <ContactSection />
      <NewsletterSection />
    </div>
  )
}
