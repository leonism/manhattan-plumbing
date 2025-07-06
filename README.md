# Plumbing Work Vue

A modern Vue.js application for plumbing services with news/blog functionality.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js v16+ (recommended v20+)
- npm v8+ or yarn v1.22+
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/plumbing-work-vue.git
   cd plumbing-work-vue
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory (see [Environment Variables](#environment-variables))

## Development

To start the development server:

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
   docker build -t plumbing-work-vue .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 plumbing-work-vue
   ```

## Project Structure

```
plumbing-work-vue/
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
├── scripts/           # Build scripts
└── ...                # Configuration files
```

## Environment Variables

Create a `.env` file in the root directory with these variables:

```
VITE_API_URL=https://api.example.com
VITE_GA_TRACKING_ID=UA-XXXXX-Y
```

## Testing

To run tests:

```bash
npm run test
# or
yarn test
```

## Troubleshooting

- **Dependency issues**: Try deleting `node_modules` and `package-lock.json` then reinstall
- **Build errors**: Check Node.js version compatibility
- **Markdown content not loading**: Verify file paths in content directory
