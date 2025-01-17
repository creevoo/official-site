import { Button } from '@shared/components'
import * as React from 'react'

export function ProductSupport(): React.ReactElement {
  return (
    <div className="flex flex-col p-3 rounded-2xl bg-primary text-primary-foreground mt-16">
      <h2 className="text-lg">Need help?</h2>

      <p className="text-primary-foreground/60 mt-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro
        itaque autem ab voluptatum quae maxime officiis velit veritatis quod
        asperiores repellat mollitia illo impedit, in modi, provident est
        consequatur.
      </p>

      <div className="flex mt-5">
        <Button variant={'outline'} size={'sm'}>
          <i className="fi fi-rr-headset" />
          Contact us
        </Button>
      </div>
    </div>
  )
}
