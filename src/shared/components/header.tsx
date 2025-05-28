import { Link } from "react-router"
import { Logo } from "./logo"
import { Button } from "./ui/button"

type NavItemProps = {
  href: string
  children: React.ReactNode
}

function Brand() {
  return (
    <Link
      to={"/"}
      className="transition-all duration-300 hover:-translate-x-1 flex items-center text-sm"
    >
      <Logo width={40} height={40} />
      <span className="font-medium">Creevoo</span>
    </Link>
  )
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li className="flex items-center text-sm">
      <Link
        to={href}
        className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground hover:-translate-y-1"
      >
        {children}
      </Link>
    </li>
  )
}

function Navigation() {
  return (
    <nav className="hidden tablet:flex">
      <ul className="flex items-center gap-6">
        <NavItem href={"/"}>Templates</NavItem>
        <NavItem href={"/"}>Components</NavItem>
        <NavItem href={"/"}>Resources</NavItem>
        <NavItem href={"/"}>Pricing</NavItem>
        <NavItem href={"/about"}>About</NavItem>
      </ul>
    </nav>
  )
}

function Actions() {
  return (
    <div className="flex items-center gap-3">
      <Button variant={"secondary"}>
        <i className="fi fi-br-bolt" />
        Unlock full access
      </Button>
    </div>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between gap-10 h-24 px-5 tablet:px-12">
      <Brand />
      <Navigation />
      <Actions />
    </header>
  )
}
