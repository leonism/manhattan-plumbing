export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Emergency Plumbing", href: "/services/emergency" },
      { label: "Drain Cleaning", href: "/services/drains" },
      { label: "Water Heaters", href: "/services/water-heaters" },
      { label: "Bathroom Remodeling", href: "/services/remodeling" },
      { label: "Pipe Replacement", href: "/services/pipes" },
      { label: "Service Fixtures", href: "/services/fixtures" },
    ],
  },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Latest News", href: "/news" },
      {
        label: "Emergency Services",
        href: "/news/category/emergency-services",
      },
      { label: "Sustainability", href: "/news/category/sustainability" },
      { label: "Tips & Guides", href: "/news/category/tips-guides" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
