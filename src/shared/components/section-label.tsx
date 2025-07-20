interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="flex items-center gap-3 text-foreground/60 text-sm px-4 py-2 border-2 border-border border-dashed rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-foreground">
      {children}
    </span>
  )
}
