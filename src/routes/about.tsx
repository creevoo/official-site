import { AboutSection, MissionSection, TeamSection } from "@features/about"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "About | Creevoo",
    description: "The team behind creevo and story of our journeys",
  })
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20">
      <AboutSection />
      <MissionSection />
      <TeamSection />
    </div>
  )
}
