import { SectionLabel } from "@shared/components"
import * as motion from "motion/react-client"

interface Feature {
  title: string
  description: string
  icon: string
}

interface FeatureItemProps {
  feature: Feature
}

const features: Feature[] = [
  {
    title: "Responsive design",
    description:
      "Every website template is built with responsive design in mind. It will look great on all devices.",
    icon: "fi fi-rr-laptop-mobile",
  },
  {
    title: "Multi platform supported",
    description:
      "Get free website templates for your landing page, blog, portfolio and business",
    icon: "fi fi-rr-vector",
  },
  {
    title: "Modern and customizable designs",
    description:
      "Craft with the latest design trends and create a unique website that stands out.",
    icon: "fi fi-rr-ruler-triangle",
  },
  {
    title: "Easy to use",
    description:
      "Get free website templates for your landing page, blog, portfolio and business",
    icon: "fi fi-rr-pencil",
  },
  {
    title: "Free updates",
    description:
      "Templates are updated regularly to ensure that they are always up-to-date and provide the best possible experience.",
    icon: "fi fi-rr-refresh",
  },
  {
    title: "24/7 support",
    description:
      "You can get full support from the creators of this website template.",
    icon: "fi fi-rr-phone-call",
  },
]

function FeatureItem({ feature }: FeatureItemProps) {
  const { title, description, icon } = feature
  return (
    <div className="flex flex-col col-span-1 border-l border-border pl-4 transition-all duration-300 hover:-translate-y-1 relative cursor-pointer">
      <h3 className="font-medium flex items-center gap-2">
        <i className={`${icon}`} />
        {title}
      </h3>
      <p className="text-sm text-foreground/60 mt-2">{description}</p>
      <span className="h-4 w-[2px] bg-primary rounded-full absolute -left-[1px] top-1" />
    </div>
  )
}

export function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "linear" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className="flex flex-col"
    >
      <div className="flex items-center gap-2">
        <SectionLabel>Core features</SectionLabel>
      </div>
      <h2 className="text-xl font-medium text-balance mt-4">
        Craft website faster
        <br />
        and smarter
      </h2>
      <p className="text-foreground/60 leading-relaxed! mt-3 text-pretty tablet:text-balance">
        Complete projects 10x faster, take on more clients, and free up your
        time to work on more important things.
      </p>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-3 gap-y-10 mt-10">
        {features.map((feat, i) => (
          <FeatureItem key={i} feature={feat} />
        ))}
      </div>
    </motion.section>
  )
}
