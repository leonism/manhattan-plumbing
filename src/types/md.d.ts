declare module "*.md" {
  import { ComponentType } from "react";
  const Component: ComponentType<any>;
  export default Component;
  export const frontmatter: any; // Adjust 'any' to a more specific type if possible
}

declare module "*.mdx" {
  import { ComponentType } from "react";
  const Component: ComponentType<any>;
  export default Component;
  export const frontmatter: any; // Adjust 'any' to a more specific type if possible
}
