import { ArticleContent } from "@shared/components"
import type { ProductDetail } from "./product-service"

interface Props {
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
