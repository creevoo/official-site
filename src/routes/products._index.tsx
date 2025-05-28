import { ProductListSection } from "@features/products"
import { generatedMetadata } from "@shared/libs"

export function meta() {
  return generatedMetadata({
    title: "Products | Creevoo",
    description:
      "Explore stunning website templates with multi platform supported",
  })
}
export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-10">
      <ProductListSection />
    </div>
  )
}
