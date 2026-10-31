export interface NavItem {
  label: string
  href: string
  title?: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', title: 'Manhattan Plumbing – Home' },
  {
    label: 'News',
    href: '/news/',
    title: 'Plumbing News & Updates',
    children: [
      { label: 'Latest News', href: '/news/', title: 'Latest Plumbing News & Industry Updates' },
      { label: 'Emergency Services', href: '/news/category/emergency-services/', title: 'Emergency Plumbing Service News & Alerts' },
      { label: 'Sustainability', href: '/news/category/sustainability/', title: 'Sustainable Plumbing Practices & Green Solutions' },
      { label: 'Tips & Guides', href: '/news/category/tips-guides/', title: 'Plumbing Tips, How-To Guides & Maintenance Advice' },
      { label: 'Smart Plumbing', href: '/news/category/smart-plumbing/', title: 'Smart Plumbing Services implementation in Manhattan' },
      { label: 'Infrastructure', href: '/news/category/infrastructure/', title: 'Plumbing Infrastructure' },
    ],
  },
  {
    label: 'Services',
    href: '/services/',
    title: 'Professional Plumbing Services in Manhattan',
    children: [
      { label: 'Emergency Plumbing', href: '/services/emergency-service/', title: '24/7 Emergency Plumbing Services in Manhattan' },
      { label: 'Drain Cleaning', href: '/services/drain-service/', title: 'Professional Drain Cleaning & Unclogging Services' },
      { label: 'Water Heaters', href: '/services/water-heater-service/', title: 'Water Heater Installation, Repair & Replacement' },
      { label: 'Bathroom Remodeling', href: '/services/remodeling-service/', title: 'Bathroom Remodeling & Renovation Services' },
      { label: 'Pipe Replacement', href: '/services/pipe-service/', title: 'Pipe Replacement & Repiping Services' },
      { label: 'Service Fixtures', href: '/services/fixture-service/', title: 'Plumbing Fixture Installation & Repair' },
    ],
  },
  { label: 'About', href: '/about/', title: 'About Manhattan Plumbing – Our Story & Team' },
  { label: 'Location', href: '/location/', title: 'Our Location – Manhattan Plumbing Service Areas' },
  { label: 'Contact', href: '/contact/', title: 'Contact Manhattan Plumbing – Get a Free Quote' },
]
