import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // <-- lägg till detta

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- lägg till detta
    },
  },
});
