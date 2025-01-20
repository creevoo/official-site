import { ArticleContent } from '@shared/components'
import * as React from 'react'
import { ProductDetail } from './product-service'

type Props = {
  product: ProductDetail
}

export function ProductContent({ product }: Props): React.ReactElement {
  const { content } = product
  return (
    <div className="flex">
      <ArticleContent>{content}</ArticleContent>
    </div>
  )
}
