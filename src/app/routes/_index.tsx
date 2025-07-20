import { generatedMetadata } from "@shared/libs"
import { HeroSection } from "@features/home"

export function meta() {
  return generatedMetadata({
    title: "Stunning Website Templates & Components | Creevoo",
    description:
      "Kickstart your website with prebuilt templates with premium quality that easily to customise and support multiple platform includig framer, webflow, wordpress, shopify and custom code",
  })
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-36 relative">
      <HeroSection />
    </div>
  )
}
