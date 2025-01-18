import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { mergeClass } from '@shared/utils'

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap font-medium text-sm !leading-none transition-all duration-300 gap-2 group relative',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        outline: 'border border-border bg-background text-foreground',
        text: 'text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground border border-transparent hover:bg-secondary/60 hover:border-border',
      },
      size: {
        base: 'h-10 px-4 rounded-xl !text-sm',
        sm: 'h-9 px-3 rounded-xl text-sm',
        lg: 'h-14 px-5 rounded-2xl',
        icon: 'h-10 w-10 rounded-2xl text-sm bg-surface',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={mergeClass(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
