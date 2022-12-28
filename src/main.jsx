import "@fontsource/rajdhani/700.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani";
import "@fontsource/hanalei-fill";
import "./assets/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { myTheme } from "./myTheme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={myTheme}>
            <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
