import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

export function ProductItem(): React.ReactElement {
  const url = `/products/product1`

  return (
    <Link href={url} className="flex flex-col col-span-1 group">
      <picture className="relative w-full h-[320px] overflow-hidden rounded-2xl">
        <Image
          src={
            'https://cdn.dribbble.com/userupload/10136128/file/original-14076d5ccaf47ee446acda3dc4b74d5d.png?resize=1504x1128&vertical=center'
          }
          alt="Product 1"
          fill
          objectFit="cover"
          className="transition-all duration-300 group-hover:scale-105"
        />
      </picture>

      <h2 className="text-lg !leading-tight mt-6">
        Breain - Simple developer portfolio
      </h2>

      <span className="text-foreground/60 mt-1">$25.5</span>
    </Link>
  )
}
