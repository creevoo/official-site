import { ProductLinkDialog } from "./product-link-dialog"
import { ProductDetail } from "./product-service"

type Props = {
  product: ProductDetail
}

export function ProductInfo({ product }: Props) {
  const { title, price } = product

  return (
    <div className="flex gap-2">
      <div className="flex flex-col flex-1">
        <h1 className="text-xl">{title}</h1>
        <span className="text-foreground/60 mt-1">${price}</span>
      </div>

      <ProductLinkDialog product={product} />
    </div>
  )
}
