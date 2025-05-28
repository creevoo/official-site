import { Button } from "@shared/components"
import { Link } from "react-router"

export function ProductSupport() {
  return (
    <div className="flex flex-col p-3 rounded-2xl bg-primary text-primary-foreground mt-16">
      <h2 className="text-lg">Need help?</h2>

      <p className="text-primary-foreground/60 mt-2 text-sm text-balance">
        We offer support for all our templates. You can use our team service to
        help you start with the template.
      </p>

      <div className="flex mt-5">
        <Button variant={"outline"} size={"sm"} asChild>
          <Link to={"https://www.tryweebo.one"} target="_blank">
            <i className="fi fi-rr-headset" />
            Use Weebo
          </Link>
        </Button>
      </div>
    </div>
  )
}
