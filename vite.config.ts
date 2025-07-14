import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteCompression from 'vite-plugin-compression'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeReact from 'rehype-react'
import rehypeRaw from 'rehype-raw'
import React from 'react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
      rehypePlugins: [
        [rehypeRaw, {
          passThrough: ['mdxjsEsm']
        }],
        [rehypeReact, { createElement: React.createElement, Fragment: React.Fragment }]
      ]
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 60 },
      webp: { quality: 80 },
      avif: { quality: 70 },
    }),
    createHtmlPlugin({
      minify: true,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      filter: /\.(js|mjs|json|css|html|xml)$/i,
      threshold: 1025,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      filter: /\.(js|mjs|json|css|html|xml)$/i,
      threshold: 1025,
    }),
  ],
  resolve: {
    alias: {},
  },
  define: {
    global: 'window',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssMinify: 'lightningcss',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
    modulePreload: {
      polyfill: true,
    },
  },
})