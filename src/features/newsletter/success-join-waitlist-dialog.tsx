import {
  ArticleContent,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/components"

interface Props {
  open: boolean
  onOpenChange: (state: boolean) => void
}

export function SuccessJoinWaitlistDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🎉 Hurray, you're awesome</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col mt-6">
          <ArticleContent>
            <p>
              Thank you so much to join the waiting list. We'll send you
              something when creevoo is launching.
            </p>

            <span className="font-mono text-accent tracking-tight text-sm">
              Creevoo, awesome template
            </span>
          </ArticleContent>
        </div>
      </DialogContent>
    </Dialog>
  )
}
