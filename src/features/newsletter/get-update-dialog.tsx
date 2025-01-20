import * as React from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shared/components'
import { SubscribeForm } from './subscribe-form'

export function GetUpdateDialog(): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={'sm'}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <i className="fi fi-br-envelope-dot" />
          Get Updates
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get weekly updates</DialogTitle>
          <DialogDescription>
            Get notified when we release new products, features, and updates.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-10 pl-2">
          <SubscribeForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
