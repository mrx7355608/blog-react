import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    fonts: {
        heading: "Cookie, sans-serif",
        body: "Rajdhani,sans-serif"
    }
});
