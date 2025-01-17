import * as React from 'react'
import { ProductItem } from './product-item'

export function ProductListSection(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-x-4 gap-y-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </div>
  )
}
