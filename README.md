
# Manhattan Plumbing 🚰

![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6.svg?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/framework-React-61DAFB.svg?style=flat-square&logo=react&logoColor=white)

> A fast, scalable plumbing-website starter built with Vite, React, TailwindCSS and TypeScript — optimized for performance, maintainability, and future scalability.

---

## 📄 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 💧 About

**Manhattan Plumbing** is a powerful, Vite-powered React and TypeScript starter template tailored for plumbing services or small business websites. It leverages modern tooling and optimizations for rapid development, SEO performance, and efficient content workflows.

---

## 🧩 Tech Stack

- **Vite** — lightning-fast dev builds
- **React 18** + **TypeScript** — typed components & reliability
- **Tailwind CSS** — atomic utility-first CSS
- **MDX / Markdown** — flexible content authoring
- **React Router** — client-side navigation
- **Image tooling** — `imagemin`, `sharp`, WebP pipeline
- **SEO & metadata** — `react-helmet-async`, Sitemap & RSS
- **Quality tooling** — ESLint, Prettier, TypeScript ESLint

---

## ✨ Features

- 🚀 Super-fast development with Vite and HMR
- 🔒 Fully typed React components via TypeScript
- 🎨 Tailwind CSS utility classes for responsive design
- 📄 MDX/Markdown support with front-matter parsing
- 🗺️ SEO-friendly features: sitemap, RSS, metadata injection
- 🖼️ Optimized build: compression, minification, WebP image formats
- 🧹 Linting and formatting out of the box

---

## 🚀 Getting Started

### Clone & Install

```bash
git clone https://github.com/leonism/manhattan-plumbing.git
cd manhattan-plumbing
npm install
````

### Development

```bash
npm run dev
```

Development server starts at:

```
http://localhost:5173
```

---

## ⚙️ Available Scripts

| Script                     | Description                                   |
| -------------------------- | --------------------------------------------- |
| `npm run dev`              | Start the development server                  |
| `npm run build`            | Build for production + generate sitemap & RSS |
| `npm run preview`          | Preview production build                      |
| `npm run lint`             | Run ESLint checks                             |
| `npm run generate`         | Generate sitemap and RSS feed                 |
| `npm run generate:sitemap` | Generate `sitemap.xml`                        |
| `npm run generate:rss`     | Generate RSS feed files                       |

---

## 🗂 Project Structure

```text
.
├── public/            # Static assets
├── src/               # Application source
│   ├── components/    # UI components
│   ├── pages/         # Route-based pages
│   ├── styles/        # Tailwind / global styles
│   ├── content/       # MDX/Markdown files
│   ├── utils/         # Utility functions
│   └── main.tsx       # Entrypoint
├── scripts/           # Sitemap & RSS generators
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🤝 Contributing

Contributions welcome! Please submit issues or pull requests for bug fixes, improvements, or ideas. We aim to build a robust, future-proof starter together.

---

## 📄 License

Distributed under the [MIT License](LICENSE).
