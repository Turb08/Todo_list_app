import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/Todo_list_app/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Todo List App",
        description: "A simple todo list application built with React",
        theme_color: "#cc7f19ff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: "icons/tick_icon.png",
            sizes: "24x24",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
