import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import {
  ProductContent,
  ProductImage,
  ProductInfo,
  productService,
  ProductSummary,
  ProductSupport,
} from '@features/products'

type Params = {
  slug: string
}

type Props = {
  params: Promise<Params>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params
  const meta = await productService.getMetadata(slug)

  const previousOGImages = (await parent).openGraph?.images || []
  const previousTwitterImages = (await parent).twitter?.images || []

  return {
    title: `${meta.title} | Creevoo`,
    description: `${meta.description}`,
    openGraph: {
      ...sharedMetadata.openGraph,
      title: `${meta.title} | Creevoo`,
      description: `${meta.description}`,
      images: [...previousOGImages, meta.image],
    },
    twitter: {
      ...sharedMetadata.twitter,
      title: `${meta.title} | Creevoo`,
      description: `${meta.description}`,
      images: [...previousTwitterImages, meta.image],
    },
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const params = await productService.getStaticParams()
  return params
}

export default async function ProductDetailPage({
  params,
}: Props): Promise<React.ReactElement> {
  const { slug } = await params
  const product = await productService.getDetail(slug)

  return (
    <div className="flex flex-col gap-10">
      <ProductInfo product={product} />
      <ProductImage product={product} />
      <ProductSummary product={product} />
      <ProductContent product={product} />
      <ProductSupport />
    </div>
  )
}
