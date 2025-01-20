import * as React from 'react'

type SectionLabelProps = {
  children: React.ReactNode
}

export function SectionLabel({
  children,
}: SectionLabelProps): React.ReactElement {
  return (
    <span className="flex items-center gap-3 text-foreground/50 text-sm px-3 py-1 border border-border rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
      {children}
    </span>
  )
}
