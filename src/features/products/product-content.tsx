import { ArticleContent } from '@shared/components'
import * as React from 'react'

export function ProductContent(): React.ReactElement {
  return (
    <div className="flex">
      <ArticleContent>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
          delectus ratione adipisci fugit nam quaerat dicta consectetur.
          Excepturi consectetur temporibus vero eos cum, atque dolore debitis
          aspernatur totam eligendi facilis ab voluptatibus incidunt odio
          suscipit ipsa distinctio sunt obcaecati magni.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          explicabo quibusdam laboriosam, debitis corrupti in? Reprehenderit
          sequi cumque eaque architecto, similique praesentium quia quos! Ea
          quasi fugit dolores possimus consequatur.
        </p>
      </ArticleContent>
    </div>
  )
}
