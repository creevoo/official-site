import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/components"
import Link from "next/link"
import { ProductDetail } from "./product-service"

type Props = {
  product: ProductDetail
}

export function ProductLinkDialog({ product }: Props) {
  const { publications } = product

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
          {publications.map((pub, i) => (
            <Link
              key={i}
              href={pub.url}
              target="_blank"
              className="flex items-center gap-2 text-foreground text-sm transition-all duration-300 hover:text-link"
            >
              <i className="fi fi-rr-circle-small" />
              {pub.name}
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
