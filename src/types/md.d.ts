declare module '*.md' {
  import { ComponentType } from 'react'
  const Component: ComponentType<object>
  export default Component
  export const frontmatter: Record<string, unknown>
}

declare module '*.mdx' {
  import { ComponentType } from 'react'
  const Component: ComponentType<object>
  export default Component
  export const frontmatter: Record<string, unknown>
}
