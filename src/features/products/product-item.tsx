import { Link } from "react-router"
import { type Product } from "./product-service"

type Props = {
  product: Product
}

export function ProductItem({ product }: Props) {
  const { title, image, price, slug } = product
  const url = `/products/${slug}`

  return (
    <Link to={url} className="flex flex-col col-span-1 group">
      <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="transition-all duration-300 group-hover:scale-105 object-cover"
        />
      </div>
      <h2 className="text-lg leading-tight! mt-6">{title}</h2>
      <span className="text-foreground/60 mt-1">${price}</span>
    </Link>
  )
}
