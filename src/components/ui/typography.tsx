import React from "react"
import { cn } from "@/lib/utils"

export const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1 ref={ref} className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", className)} {...props}>
        {children}
      </h1>
    )
  }
)
TypographyH1.displayName = "TypographyH1"

export const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn("text-3xl font-semibold tracking-tight", className)} {...props}>
        {children}
      </h2>
    )
  }
)
TypographyH2.displayName = "TypographyH2"

export const TypographyH3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn("text-2xl font-semibold tracking-tight", className)} {...props}>
        {children}
      </h3>
    )
  }
)
TypographyH3.displayName = "TypographyH3"

export const TypographyH4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4 ref={ref} className={cn("text-xl font-semibold tracking-tight", className)} {...props}>
        {children}
      </h4>
    )
  }
)
TypographyH4.displayName = "TypographyH4"

export const TypographyP = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("", className)} {...props}>
        {children}
      </p>
    )
  }
)
TypographyP.displayName = "TypographyP"

export const TypographyBlockquote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote ref={ref} className={cn("border-l-2 pl-6 italic", className)} {...props}>
        {children}
      </blockquote>
    )
  }
)
TypographyBlockquote.displayName = "TypographyBlockquote"

export const TypographyList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn("list-disc", className)} {...props}>
        {children}
      </ul>
    )
  }
)
TypographyList.displayName = "TypographyList"

export const TypographyInlineCode = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <code ref={ref} className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props}>
        {children}
      </code>
    )
  }
)
TypographyInlineCode.displayName = "TypographyInlineCode"

export const TypographyLead = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-xl text-muted-foreground", className)} {...props}>
        {children}
      </p>
    )
  }
)
TypographyLead.displayName = "TypographyLead"

export const TypographyLarge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-lg font-semibold", className)} {...props}>
        {children}
      </div>
    )
  }
)
TypographyLarge.displayName = "TypographyLarge"

export const TypographySmall = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <small ref={ref} className={cn("text-sm font-medium", className)} {...props}>
        {children}
      </small>
    )
  }
)
TypographySmall.displayName = "TypographySmall"

export const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
        {children}
      </p>
    )
  }
)
TypographyMuted.displayName = "TypographyMuted"
