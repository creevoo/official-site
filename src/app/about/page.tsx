import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { AboutSection, MissionSection, TeamSection } from '@features/about'

export const metadata: Metadata = {
  title: 'About | Creevoo',
  description: 'The team behind creevo and story of our journeys',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'About | Creevoo',
    description: 'The team behind creevo and story of our journeys',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'About | Creevoo',
    description: 'The team behind creevo and story of our journeys',
  },
}

export default function AboutPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-20">
      <AboutSection />
      <MissionSection />
      <TeamSection />
    </div>
  )
}
