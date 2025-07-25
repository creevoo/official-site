"use client"

import * as React from "react"
import type { ProductDetail } from "./product-service"

interface Props {
  product: ProductDetail
}

export function ProductImage({ product }: Props) {
  const { images, title } = product
  const [selectedImage, setSelectedImage] = React.useState<string>(images[0])

  function onOpenPreview(img: string) {
    setSelectedImage(img)
  }

  return (
    <div className="flex flex-col tablet:flex-row gap-3">
      <div className="flex p-1 border border-border rounded-2xl flex-1">
        <div className="flex relative overflow-hidden rounded-xl h-[240px] tablet:h-[400px] w-full">
          <img src={selectedImage} alt={title} className="object-cover" />
        </div>
      </div>

      <div className="flex flex-wrap tablet:flex-col items-center gap-1 py-3">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => onOpenPreview(img)}
            className="border-1 border-primary rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={img}
              alt={title}
              width={70}
              height={70}
              className="object-cover w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
