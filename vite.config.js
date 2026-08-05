// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Pisahkan vendor besar ke chunk tersendiri
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          animation: ["framer-motion"],
          carousel: ["embla-carousel-react", "embla-carousel-autoplay"],
          redux: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
    // Aktifkan CSS code splitting
    cssCodeSplit: true,
  },
});
