"use server"

import { join } from "path"
import { promises as fs } from "fs"

const PRODUCT_CONTENT_DIR = "src/features/products/contents"

type ProductFrontmatter = {
  title: string
  description: string
  images: string[]
  price: number
  summary: {
    version: string
    platforms: string
    license: string
  }
  publications: {
    name: string
    url: string
  }[]
}

type ProductMetadata = Pick<ProductFrontmatter, "title" | "description"> & {
  image: string
}

export type Product = Pick<ProductFrontmatter, "title" | "price"> & {
  image: string
  slug: string
}

export type ProductDetail = ProductFrontmatter & {
  slug: string
  image: string
  content: any
}
