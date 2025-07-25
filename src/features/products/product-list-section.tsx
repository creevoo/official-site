import { ProductItem } from "./product-item"

export function ProductListSection() {
  const products = []

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-4 gap-y-20">
        {products.length > 0 &&
          products.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}

        {products.length === 0 && (
          <div className="flex flex-col items-center">
            <span className="text-foreground/60 flex items-center gap-2">
              <i className="fi fi-rr-spinner animate-spin" /> More coming soon
              ...
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
