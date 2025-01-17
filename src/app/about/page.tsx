import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'

import { ArticleContent } from '@shared/components'

export const metadata: Metadata = {
  title: 'About',
  description: 'The team behind creevo and story of our journeys',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'About',
    description: 'The team behind creevo and story of our journeys',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'About',
    description: 'The team behind creevo and story of our journeys',
  },
}

export default function AboutPage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <ArticleContent>Hello from about</ArticleContent>
    </div>
  )
}
