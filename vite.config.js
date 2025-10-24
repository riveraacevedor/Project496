import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),  // handles JSX and React
    svgr(),   // allows importing SVGs as React components
  ],
  build: {
    outDir: 'dist',   // default build folder
  },
  preview: {
    host: '0.0.0.0',             // needed for Render
    port: process.env.PORT,       // Render dynamically sets the port
    allowedHosts: ['*'],         // allow Render host
  },
})

