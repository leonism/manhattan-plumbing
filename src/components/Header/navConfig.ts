export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
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
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Emergency Plumbing", href: "/services/emergency-service" },
      { label: "Drain Cleaning", href: "/services/drain-service" },
      { label: "Water Heaters", href: "/services/water-heater-service" },
      { label: "Bathroom Remodeling", href: "/services/remodeling-service" },
      { label: "Pipe Replacement", href: "/services/pipe-service" },
      { label: "Service Fixtures", href: "/services/fixture-service" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
