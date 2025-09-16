import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./assets/fontawesom.css";
import "./assets/swipper.css";
import App from "./App.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
