<div align="center">
  <h1>Manhattan Plumbing</h1>
  <p>
  <strong>
  A high-performance, accessible plumbing-service platform built with Next.js, React 19, and Tailwind CSS — engineered for sub-millisecond search and premium user experience.
  </strong>
  </p>

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![FlexSearch](https://img.shields.io/badge/Search-FlexSearch-blueviolet?style=flat)](https://github.com/nextapps-de/flexsearch)

  <!-- Deployment & Features -->
[![Vercel](https://img.shields.io/badge/Preview-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1-green?style=flat)](#)
[![Dark Mode](https://img.shields.io/badge/Dark_Mode-Native_CSS-000000?style=flat)](#)

</div>

---

## 🚀 Key Improvements & Features

### 🔍 Sub-Millisecond Search Engine
The search system has been refactored for extreme performance:
- **100x Faster**: Replaced naive client-side filtering with **FlexSearch**, providing instant results across 1,000+ posts.
- **Static API Indexing**: Uses a `force-static` Next.js route (`/api/search`) to serve a lightweight metadata index, reducing initial payload by >90%.
- **Unified Results**: Seamlessly indexes **News**, **Services**, and **Legal Pages** (with working thumbnails).
- **Global Shortcut**: Use `⌘K` (or `Ctrl+K`) to toggle the search modal from anywhere.
- **Mobile Optimized**: Results are truncated to 2 lines maximum for better legibility on small screens.

### 🎨 Modern UI & UX
- **Performance Skeletons**: Integrated Shadcn-style Skeletons for smooth loading states and zero layout shift.
- **Native Dark Mode**: Clean implementation using Tailwind's `dark:` utilities, ensuring high contrast and zero flickering during theme transitions.
- **Accessibility First**: WCAG-compliant color palettes and keyboard-accessible navigation components.
- **Responsive Layouts**: Optimized spacing for mobile viewports, including improved Table of Contents and navigation buttons.

### 📂 Dynamic Content Pipeline
- **MDX Powered**: Full support for MDX across News, Services, and Legal content.
- **Legal Migration**: Privacy Policy, Terms of Service, and Cookies Policy are now fully MDX-based and indexable.
- **Post-Build Markdown Output**: Automatically generates `index.md` versions of every page (e.g., `/privacy-policy/index.md`) using a custom JSDOM/Turndown script, enabling easier content auditing and LLM indexing.
- **Asset Optimization**: Automated post-build image normalization and lazy loading.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org) (App Router)
- **Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4.3+](https://tailwindcss.com)
- **Search**: [FlexSearch](https://github.com/nextapps-de/flexsearch)
- **Content**: MDX, [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

---

## 🏗 Project Structure

```text
manhattan-plumbing/
├── src/
│   ├── app/           # Next.js App Router (Routes & APIs)
│   │   ├── api/       # Static API endpoints (Search Index)
│   │   └── (routes)   # Page layouts and components
│   ├── components/    # UI Components (Headless UI, Shadcn-style)
│   ├── content/       # MDX Content (News, Services, Legal)
│   ├── hooks/         # Custom Hooks (useSearch, useTheme)
│   ├── lib/           # Logic & Data Fetching (MDX Parsers)
│   ├── types/         # TypeScript Definitions
│   └── utils/         # Helper functions
├── public/            # Optimized Static Assets
├── scripts/           # Post-build & Content generation scripts
├── package.json       # Dependencies & Scripts
└── tailwind.config.js # Design Tokens
```

---

## 🚦 Getting Started

### Prerequisites
- **Node.js** v20+
- **npm** v10+

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/leonism/manhattan-plumbing.git
   cd manhattan-plumbing
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Build & Production
```bash
npm run build
npm run start
```

---

## 📝 Available Scripts

- `npm run dev`: Start development server on port 3000.
- `npm run build`: Build production bundle and run post-build markdown optimization.
- `npm run lint`: Run ESLint check.
- `npm run format`: Format code with Prettier.
- `npm run check:code`: Combined format and lint:fix command.
- `npm run madge`: Check for circular dependencies in `src`.

---

## 📄 License

This project is private and intended for Manhattan Plumbing official use. Distributed under the [MIT License](LICENSE).

