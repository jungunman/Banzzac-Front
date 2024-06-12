import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: [
      { find: "@api", replacement: "/src/api" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@containers", replacement: "/src/containers" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@models", replacement: "/src/models" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@recoil", replacement: "/src/recoil" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@", replacement: "/src" },
    ],
  },
  define: { global: {} },
});
