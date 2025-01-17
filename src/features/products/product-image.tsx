import Image from 'next/image'
import * as React from 'react'

export function ProductImage(): React.ReactElement {
  return (
    <div className="flex gap-3">
      <div className="flex p-1 border border-border rounded-2xl flex-1">
        <picture className="flex relative overflow-hidden rounded-xl h-[400px] w-full">
          <Image
            src={
              'https://cdn.dribbble.com/userupload/10136128/file/original-14076d5ccaf47ee446acda3dc4b74d5d.png?resize=1504x1128&vertical=center'
            }
            alt=""
            fill
            objectFit="cover"
            className=""
          />
        </picture>
      </div>

      <div className="flex flex-col items-center gap-1 py-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            className="border-1 border-primary rounded-lg overflow-hidden cursor-pointer"
            key={i}
          >
            <Image
              src={
                'https://cdn.dribbble.com/userupload/10136128/file/original-14076d5ccaf47ee446acda3dc4b74d5d.png?resize=1504x1128&vertical=center'
              }
              alt=""
              width={70}
              height={70}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
