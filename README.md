<div align="center">
  <h1>Manhattan Plumbing</h1>
  <p>
  <strong>
  A fast, scalable plumbing-website starter built with Vite, React, TailwindCSS and TypeScript — optimized for performance, maintainability, and future scalability.
  </strong>
  </p>

[![Manhattan Plumbing](manhattan-plumber.png 'A fast, scalable plumbing-website starter built with Vite, React, TailwindCSS and TypeScript — optimized for performance, maintainability, and future scalability.')](https://manhattan-plumbing.pages.dev/)

  [![React](https://img.shields.io/badge/React-18.3.1-FF5D01?style=flat&logo=react&logoColor=white)](https://react.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

  <!-- Additional new badges below -->
  [![Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare_Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
  [![Vercel](https://img.shields.io/badge/Preview-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
  [![Dark Mode](https://img.shields.io/badge/Dark_Mode-Enabled-000000?style=flat)](#)
</div>

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js v16+ (recommended v20+)
- npm v8+ or yarn v1.22+
- Git & Github Account

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/leonism/manhattan-plumbing.git
   cd manhattan-plumbing
   ```

2. Install dependencies:

```bash
git clone https://github.com/leonism/manhattan-plumbing.git
cd manhattan-plumbing
npm install
````

### Development

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To build for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)

1. Configure your static hosting provider to:

   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`

2. Set up any required environment variables

### Docker

1. Build the Docker image:

   ```bash
   docker build -t manhatten-plumbing .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 manhattan-plumbing
   ```

## Project Structure

```
manhattan-plumbing/
├── src/
│   ├── components/    # Reusable components
│   ├── content/       # Markdown content
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── sections/      # Section components
│   ├── types/         # Type definitions
│   ├── App.tsx        # Main app component
│   └── main.tsx       # App entry point
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
