import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // ensures Render can reach it
    port: process.env.PORT, // use Render's PORT environment variable
    allowedHosts: ['four96projectlive.onrender.com'], // add your Render hostname
  }
})
