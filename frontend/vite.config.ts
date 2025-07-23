import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "5173-lennoxgonz-scubagearpic-7ekuzl7v3mq.ws-us120.gitpod.io",
    ],
    watch: {
      usePolling: true,
    },
  },
});
