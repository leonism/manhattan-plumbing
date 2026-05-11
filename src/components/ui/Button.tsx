import Link from 'next/link'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-base font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-blue-700 dark:hover:bg-blue-700',
        outline:
          'border-primary bg-transparent text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-fit gap-2 px-4 py-2',
        xs: 'h-fit gap-1 px-2 py-1 text-xs',
        sm: 'h-fit gap-1 px-3 py-1.5 text-sm',
        lg: 'h-fit gap-2 px-6 py-3 text-lg',
        icon: 'size-10',
        'icon-xs': 'size-7',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  fullWidth?: boolean
  target?: string
  rel?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, fullWidth, ...props }, ref) => {
    const isExternal = href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:')
    const Comp = (asChild ? Slot : href ? (isExternal ? 'a' : Link) : ButtonPrimitive) as React.ElementType
    return (
      <Comp
        ref={ref as React.Ref<never>}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }), fullWidth && 'w-full')}
        {...(href ? { href, ...props } : props)}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
