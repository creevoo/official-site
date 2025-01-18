import Link from 'next/link'

type ContactItemProps = {
  href: string
  children: React.ReactNode
}

export function ContactItem({
  href,
  children,
}: ContactItemProps): React.ReactElement {
  return (
    <li className="flex">
      <Link
        href={href}
        target="_blank"
        className="flex items-center gap-2 hover:text-foreground/60 transition-all duration-300"
      >
        <i className="fi fi-rr-circle-small" />
        {children}
      </Link>
    </li>
  )
}
