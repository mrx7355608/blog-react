import "@fontsource/rajdhani/700.css";
import "@fontsource/rajdhani/500.css";
import "@fontsource/rajdhani/600.css";
import "@fontsource/rajdhani/300.css";
import "@fontsource/rajdhani";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { myTheme } from "./myTheme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider theme={myTheme}>
        <App />
    </ChakraProvider>
);
