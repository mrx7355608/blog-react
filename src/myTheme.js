import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    fonts: {
        heading: "Cookie, sans-serif",
        body: "Rajdhani,sans-serif"
    }
});
