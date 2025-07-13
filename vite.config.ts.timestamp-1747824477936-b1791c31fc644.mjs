// vite.config.ts
import { defineConfig } from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/vite/dist/node/index.js'
import react from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/@vitejs/plugin-react/dist/index.mjs'
import viteImagemin from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/vite-plugin-imagemin/dist/index.mjs'
import viteCompression from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/vite-plugin-compression/dist/index.mjs'
import mdx from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/@mdx-js/rollup/index.js'
import remarkFrontmatter from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/remark-frontmatter/index.js'
import remarkMdxFrontmatter from 'file:///Volumes/DATA/Vue.js/plumbing-work-vue/node_modules/remark-mdx-frontmatter/index.js'
var vite_config_default = defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    // Compress images using vite-plugin-imagemin
    viteImagemin({
      filter: /\.(jpe?g|png|gif|svg)$/i,
      // Only apply to image files [[1]]
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 80,
      },
    }),
    // Compress JavaScript and CSS files using gzip
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Compress JavaScript and CSS files using brotli
    viteCompression({
      algorithm: 'brotli',
      ext: '.br',
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    // Exclude specific dependencies from pre-bundling [[6]]
  },
  assetsInclude: ['**/*.md'],
  // Include markdown files as assets [[4]]
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Group vendor libraries
          ui: ['lucide-react'],
          // Group UI components
          utils: ['date-fns', 'gray-matter'],
          // Group utility libraries
        },
      },
    },
    minify: 'terser',
    // Use terser for minification [[5]]
    terserOptions: {
      compress: {
        drop_console: true,
        // Remove console statements
        drop_debugger: true,
        // Remove debugger statements
      },
    },
    cssMinify: 'lightningcss',
    // Use lightningcss for CSS minification
    cssCodeSplit: true,
    // Enable CSS code splitting
    chunkSizeWarningLimit: 1e3,
    // Increase chunk size warning limit
    reportCompressedSize: true,
    // Report compressed size in build logs
    modulePreload: {
      polyfill: true,
      // Add module preload polyfill
    },
  },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9EQVRBL1Z1ZS5qcy9wbHVtYmluZy13b3JrLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1ZvbHVtZXMvREFUQS9WdWUuanMvcGx1bWJpbmctd29yay12dWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvREFUQS9WdWUuanMvcGx1bWJpbmctd29yay12dWUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tIFwidml0ZS1wbHVnaW4taW1hZ2VtaW5cIjtcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgbWR4IGZyb20gXCJAbWR4LWpzL3JvbGx1cFwiO1xuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gXCJyZW1hcmstZnJvbnRtYXR0ZXJcIjtcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tIFwicmVtYXJrLW1keC1mcm9udG1hdHRlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnLyAgW1syXV1cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1keCh7XG4gICAgICByZW1hcmtQbHVnaW5zOiBbcmVtYXJrRnJvbnRtYXR0ZXIsIHJlbWFya01keEZyb250bWF0dGVyXSxcbiAgICB9KSxcbiAgICAvLyBDb21wcmVzcyBpbWFnZXMgdXNpbmcgdml0ZS1wbHVnaW4taW1hZ2VtaW5cbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgZmlsdGVyOiAvXFwuKGpwZT9nfHBuZ3xnaWZ8c3ZnKSQvaSwgLy8gT25seSBhcHBseSB0byBpbWFnZSBmaWxlcyBbWzFdXVxuICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiA4MCxcbiAgICAgIH0sXG4gICAgICBwbmdxdWFudDoge1xuICAgICAgICBxdWFsaXR5OiBbMC44LCAwLjldLFxuICAgICAgICBzcGVlZDogNCxcbiAgICAgIH0sXG4gICAgICBzdmdvOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicmVtb3ZlRW1wdHlBdHRyc1wiLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHdlYnA6IHtcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIC8vIENvbXByZXNzIEphdmFTY3JpcHQgYW5kIENTUyBmaWxlcyB1c2luZyBnemlwXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIGFsZ29yaXRobTogXCJnemlwXCIsXG4gICAgICBleHQ6IFwiLmd6XCIsXG4gICAgfSksXG4gICAgLy8gQ29tcHJlc3MgSmF2YVNjcmlwdCBhbmQgQ1NTIGZpbGVzIHVzaW5nIGJyb3RsaVxuICAgIHZpdGVDb21wcmVzc2lvbih7XG4gICAgICBhbGdvcml0aG06IFwiYnJvdGxpXCIsXG4gICAgICBleHQ6IFwiLmJyXCIsXG4gICAgfSksXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFtcImx1Y2lkZS1yZWFjdFwiXSwgLy8gRXhjbHVkZSBzcGVjaWZpYyBkZXBlbmRlbmNpZXMgZnJvbSBwcmUtYnVuZGxpbmcgW1s2XV1cbiAgfSxcbiAgYXNzZXRzSW5jbHVkZTogW1wiKiovKi5tZFwiXSwgLy8gSW5jbHVkZSBtYXJrZG93biBmaWxlcyBhcyBhc3NldHMgW1s0XV1cbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0LXJvdXRlci1kb21cIl0sIC8vIEdyb3VwIHZlbmRvciBsaWJyYXJpZXNcbiAgICAgICAgICB1aTogW1wibHVjaWRlLXJlYWN0XCJdLCAvLyBHcm91cCBVSSBjb21wb25lbnRzXG4gICAgICAgICAgdXRpbHM6IFtcImRhdGUtZm5zXCIsIFwiZ3JheS1tYXR0ZXJcIl0sIC8vIEdyb3VwIHV0aWxpdHkgbGlicmFyaWVzXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWluaWZ5OiBcInRlcnNlclwiLCAvLyBVc2UgdGVyc2VyIGZvciBtaW5pZmljYXRpb24gW1s1XV1cbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFJlbW92ZSBjb25zb2xlIHN0YXRlbWVudHNcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgLy8gUmVtb3ZlIGRlYnVnZ2VyIHN0YXRlbWVudHNcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3NNaW5pZnk6IFwibGlnaHRuaW5nY3NzXCIsIC8vIFVzZSBsaWdodG5pbmdjc3MgZm9yIENTUyBtaW5pZmljYXRpb25cbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsIC8vIEVuYWJsZSBDU1MgY29kZSBzcGxpdHRpbmdcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsIC8vIEluY3JlYXNlIGNodW5rIHNpemUgd2FybmluZyBsaW1pdFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLCAvLyBSZXBvcnQgY29tcHJlc3NlZCBzaXplIGluIGJ1aWxkIGxvZ3NcbiAgICBtb2R1bGVQcmVsb2FkOiB7XG4gICAgICBwb2x5ZmlsbDogdHJ1ZSwgLy8gQWRkIG1vZHVsZSBwcmVsb2FkIHBvbHlmaWxsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUyxTQUFTLG9CQUFvQjtBQUNqVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBR2pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsSUFDekQsQ0FBQztBQUFBO0FBQUEsSUFFRCxhQUFhO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxtQkFBbUI7QUFBQSxNQUNyQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNsQixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBRUQsZ0JBQWdCO0FBQUEsTUFDZCxXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUE7QUFBQSxJQUVELGdCQUFnQjtBQUFBLE1BQ2QsV0FBVztBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUE7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFNBQVM7QUFBQTtBQUFBLEVBQ3pCLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUE7QUFBQSxVQUNqRCxJQUFJLENBQUMsY0FBYztBQUFBO0FBQUEsVUFDbkIsT0FBTyxDQUFDLFlBQVksYUFBYTtBQUFBO0FBQUEsUUFDbkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxRQUNkLGVBQWU7QUFBQTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBO0FBQUEsSUFDWCxjQUFjO0FBQUE7QUFBQSxJQUNkLHVCQUF1QjtBQUFBO0FBQUEsSUFDdkIsc0JBQXNCO0FBQUE7QUFBQSxJQUN0QixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
