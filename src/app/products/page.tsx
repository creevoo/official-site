import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { ProductListSection } from '@features/products'

export const metadata: Metadata = {
  title: 'Products - Creevoo',
  description:
    'Explore stunning website templates with multi platform supported',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Products - Creevoo',
    description:
      'Explore stunning website templates with multi platform supported',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Products - Creevoo',
    description:
      'Explore stunning website templates with multi platform supported',
  },
}

export default function ProductsPage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-10">
      <ProductListSection />
    </div>
  )
}
