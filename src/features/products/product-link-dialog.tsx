import * as React from 'react'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shared/components'
import Link from 'next/link'

export function ProductLinkDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <i className="fi fi-br-basket-shopping-minus" />
          Get it
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get it now on</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-10 pl-2">
          <Link
            href={'/'}
            target="_blank"
            className="flex items-center gap-2 text-foreground text-sm transition-all duration-300 hover:text-link"
          >
            <i className="fi fi-rr-circle-small" />
            See on framer
          </Link>
          <Link
            href={'/'}
            target="_blank"
            className="flex items-center gap-2 text-foreground text-sm transition-all duration-300 hover:text-link"
          >
            <i className="fi fi-rr-circle-small" />
            See on webflow
          </Link>
          <Link
            href={'/'}
            target="_blank"
            className="flex items-center gap-2 text-foreground text-sm transition-all duration-300 hover:text-link"
          >
            <i className="fi fi-rr-circle-small" />
            See on themeforest
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
