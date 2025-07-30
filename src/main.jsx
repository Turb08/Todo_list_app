import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//auto‐register the generated service worker
import { registerSW } from "virtual:pwa-register";
registerSW({
  onNeedRefresh() {
    console.log("New content is available; please refresh.");
  },
  onOfflineReady() {
    console.log("🎉 App ready to work offline!");
  },
});

// Register the service worker for PWA support
if (import.meta.env.PROD) {
  import("virtual:pwa-register").then(({ registerSW }) => {
    registerSW({ onOfflineReady: () => {} });
  });
}
