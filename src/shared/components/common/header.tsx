'use client'
import * as React from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { GetUpdateDialog } from '@features/updates'

type NavItemProps = {
  href: string
  children: React.ReactNode
}

function Brand(): React.ReactElement {
  return (
    <div className="text-sm gap-3 flex relative z-10">
      <Link
        href={'/'}
        className="transition-all duration-300 hover:-translate-x-1 flex items-center gap-3"
      >
        <Logo width={32} height={32} />
        <span className="font-medium">Creevoo</span>
      </Link>
    </div>
  )
}

function NavItem({ children, href }: NavItemProps): React.ReactElement {
  return (
    <li className="flex items-center text-sm">
      <Link
        href={href}
        className="flex items-center gap-2 transition-all duration-300 text-foreground/60 hover:text-foreground font-medium hover:-translate-y-1"
      >
        {children}
      </Link>
    </li>
  )
}

function Naviation(): React.ReactElement {
  return (
    <nav className="flex flex-1">
      <ul className="flex items-center gap-6">
        <NavItem href={'/products'}>Products</NavItem>
        <NavItem href={'/about'}>About</NavItem>
      </ul>
    </nav>
  )
}

function Actions(): React.ReactElement {
  return (
    <div className="flex items-center gap-3">
      <GetUpdateDialog />
    </div>
  )
}

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center gap-10 h-24">
      <Brand />
      <Naviation />
      <Actions />
    </header>
  )
}
