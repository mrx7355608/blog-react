import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

export const myTheme = extendTheme(
    {
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false
        },
        fonts: {
            heading: "Cookie, sans-serif",
            body: "Rajdhani,sans-serif"
        }
    },
    withProse()
);
