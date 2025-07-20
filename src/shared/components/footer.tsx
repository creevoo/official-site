import { Link } from "react-router"
import { mergeClass } from "@shared/libs"

const footerMenus = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
]

interface MenuItemProps {
  href: string
  children?: React.ReactNode
  className?: string
}

export function MenuItem({ href, children, className }: MenuItemProps) {
  return (
    <li
      className={`${mergeClass(
        "flex items-center justify-center text-sm p-1 rounded-xl bg-transparent transition-all hover:-translate-y-1 hover:text-foreground/60 duration-300",
        className,
      )}`}
    >
      <Link to={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

export function FooterMenuList() {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8 px-10">
        <span className="text-sm cursor-pointer">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  )
}
