import * as React from 'react'
import { ProductLinkDialog } from './product-link-dialog'

export function ProductInfo(): React.ReactElement {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col flex-1">
        <h1 className="text-xl">Breain - Simple developer portfolio</h1>
        <span className="text-foreground/60 mt-1">$25.00</span>
      </div>

      <ProductLinkDialog />
    </div>
  )
}
