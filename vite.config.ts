import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      start: {
        entry: "./src/server.ts",
      },
    }),
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
