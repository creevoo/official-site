import Image from "next/image"
import Link from "next/link"
import { Product } from "./product-service"

type Props = {
  product: Product
}

export function ProductItem({ product }: Props) {
  const { title, image, price, slug } = product
  const url = `/products/${slug}`

  return (
    <Link href={url} className="flex flex-col col-span-1 group">
      <picture className="relative w-full h-[320px] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="transition-all duration-300 group-hover:scale-105 object-cover"
        />
      </picture>
      <h2 className="text-lg leading-tight! mt-6">{title}</h2>
      <span className="text-foreground/60 mt-1">${price}</span>
    </Link>
  )
}
