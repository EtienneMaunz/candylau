import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      outDir: "dist",
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_BASE_URL,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
