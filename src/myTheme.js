import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    fonts: {
        heading: "Hanalei Fill, sans-serif",
        body: "Raleway, sans-serif"
    }
});
