import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'

export const metadata: Metadata = {
  title: 'Stunning Website Templates - Creevoo',
  description:
    'Get free and use stunning website template for your landing page, blog, portfolio and business',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Stunning Website Templates - Creevoo',
    description:
      'Get free and use stunning website template for your landing page, blog, portfolio and business',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Stunning Website Templates - Creevoo',
    description:
      'Get free and use stunning website template for your landing page, blog, portfolio and business',
  },
}

export default function HomePage(): React.ReactElement {
  return <div className="flex flex-col gap-10"></div>
}
