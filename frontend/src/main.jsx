import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
