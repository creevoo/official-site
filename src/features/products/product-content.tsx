import { ArticleContent } from "@shared/components"
import { ProductDetail } from "./product-service"

type Props = {
  product: ProductDetail
}

export function ProductContent({ product }: Props) {
  const { content } = product
  return (
    <div className="flex">
      <ArticleContent>{content}</ArticleContent>
    </div>
  )
}
