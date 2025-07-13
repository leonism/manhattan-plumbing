import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteCompression from 'vite-plugin-compression'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm' // Import remark-gfm
import rehypeReact from 'rehype-react' // Import rehype-react
import React from 'react' // Import React

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm], // Add remarkGfm
      rehypePlugins: [
        [rehypeReact, { createElement: React.createElement, Fragment: React.Fragment }],
      ], // Configure rehypeReact
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 60,
      },
      webp: {
        quality: 80, // Use 80% quality for WebP
      },
      avif: {
        quality: 70, // Use 70% quality for AVIF
      },
      // Optional: Configure other image formats as needed
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  resolve: {
    alias: {
      // Removed buffer polyfill as front-matter is used
    },
  },
  define: {
    global: 'window', // Define 'global' as 'window' for browser compatibility
    // Removed Buffer polyfill as front-matter is used
  },
  optimizeDeps: {
    // Exclude specific dependencies from pre-bundling
    exclude: ['lucide-react'],
  },
  // Include markdown files as assets
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
          utils: ['date-fns', 'gray-matter'],
        },
      },
    },
    // Use terser for minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssMinify: 'lightningcss',
    html: {
      minify: true,
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
    modulePreload: {
      polyfill: true,
    },
  },
})
