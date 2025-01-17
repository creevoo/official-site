import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1737017115720/bf93d99c-42e7-4d2c-b1e6-6fac1629b111.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Download Stunning Website Templates - Creevoo',
}

const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1737017115720/bf93d99c-42e7-4d2c-b1e6-6fac1629b111.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Download Stunning Website Templates - Creevoo',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
