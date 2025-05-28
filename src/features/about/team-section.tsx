import { Link } from "react-router"

export function TeamSection() {
  return (
    <section className="flex flex-col">
      <span className="text-foreground/60 text-lg">Meet our team.</span>
      <h2 className="text-xl font-medium text-balance mt-1">
        Meet Creevoo templates crafter.
      </h2>

      <span className="border-b-2 border-border border-dashed mt-6" />

      <div className="flex flex-col gap-6 mt-10 text-foreground/60 leading-relaxed!">
        <p>
          Meet with our teams who loves to create beautiful and functional
          website templates. Our team is made up of designers and developers
          that working on different platforms and technologies.
        </p>
        <p>
          That's why we loves to share and crafting a templates that really work
          on different scenario and situations for business, personal, and
          commercial purpose. The team ensure that all templates working and
          well crafted to help your business and needs in the industry.
        </p>
      </div>

      <div className="flex flex-col mt-10 ml-2">
        <Link
          to={"https://nyomansunima.one"}
          target="_blank"
          className="flex items-center gap-2 transition-all duration-300 hover:text-foreground/60"
        >
          <i className="fi fi-rr-circle-small" />
          Nyoman Sunima (Founder)
        </Link>
      </div>
    </section>
  )
}
