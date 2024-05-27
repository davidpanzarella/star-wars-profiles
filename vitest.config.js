import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
    include: ["**/__tests__/**/*.test.{js,ts,jsx,tsx}"],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
