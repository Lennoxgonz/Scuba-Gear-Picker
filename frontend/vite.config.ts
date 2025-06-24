import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      allowedHosts: ["5173-lennoxgonz-scubagearpic-n0mu3lc95cx.ws-us120.gitpod.io"],
  },
})
