import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
  },
  base: '/admin',
  server: {
    proxy: {
      '/apiv1': {
        target: 'http://localhost:3000', // The address of your backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Set to true if the backend uses HTTPS with a valid certificate
      },
      '/apiv1/teachers/lessons': {
        target: 'http://localhost:3000', // The address of your backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // Set to true if the backend uses HTTPS with a valid certificate
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxInject: `import { h, Fragment } from '/src/core/h.js'`,
    jsxFragment: 'Fragment',
  },
})
