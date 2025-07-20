interface ProductFrontmatter {
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

export type Product = Pick<ProductFrontmatter, "title" | "price"> & {
  image: string
  slug: string
}

export type ProductDetail = ProductFrontmatter & {
  slug: string
  image: string
  content: any
}
