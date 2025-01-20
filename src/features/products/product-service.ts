'use server'

import { join } from 'path'
import { promises as fs } from 'fs'
import { getFrontmatter } from 'next-mdx-remote-client/utils'
import { evaluate } from 'next-mdx-remote-client/rsc'
import { notFound } from 'next/navigation'

const PRODUCT_CONTENT_DIR = './src/features/products/contents'

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

type ProductMetadata = Pick<ProductFrontmatter, 'title' | 'description'> & {
  image: string
}

export type Product = Pick<ProductFrontmatter, 'title' | 'price'> & {
  image: string
  slug: string
}

export type ProductDetail = ProductFrontmatter & {
  slug: string
  image: string
  content: any
}

async function getContentFilePaths(): Promise<string[]> {
  const files =
    (await fs.readdir(join(process.cwd(), PRODUCT_CONTENT_DIR))) || []
  const contentFiles = files.filter((file) => file.endsWith('.md'))
  return contentFiles
}

async function readContentFile(file: string): Promise<string> {
  const filePath = join(join(process.cwd(), PRODUCT_CONTENT_DIR), file)
  const content = await fs.readFile(filePath, 'utf8')
  return content
}

export async function getMetadata(slug: string): Promise<ProductMetadata> {
  const contentFile = await readContentFile(`${slug}.md`).catch(() => {
    return notFound()
  })

  const { frontmatter: meta } = getFrontmatter<ProductFrontmatter>(contentFile)
  return {
    title: meta.title,
    description: meta.description,
    image: meta.images[0],
  }
}

export async function getStaticParams(): Promise<{ slug: string }[]> {
  const files = await getContentFilePaths()
  const slugs =
    files.map((file) => file.replace('.md', '')).map((slug) => ({ slug })) || []

  return slugs
}

export async function getDetail(slug: string): Promise<ProductDetail> {
  const contentFile = await readContentFile(`${slug}.md`).catch(() => {
    return notFound()
  })

  const { frontmatter, content } = await evaluate<ProductFrontmatter, any>({
    source: contentFile,
    options: {
      parseFrontmatter: true,
    },
    components: {},
  })

  return {
    slug,
    image: frontmatter.images[0],
    ...frontmatter,
    content,
  }
}

export async function getProducts(): Promise<Product[]> {
  const files = await getContentFilePaths()
  const products = await Promise.all(
    files.map(async (file) => {
      const contentFile = await readContentFile(`${file}`)
      const { frontmatter } = getFrontmatter<ProductFrontmatter>(contentFile)
      const slug = file.replace('.md', '')

      return {
        title: frontmatter.title,
        price: frontmatter.price,
        image: frontmatter.images[0],
        slug,
      } as Product
    }),
  )

  return products
}
