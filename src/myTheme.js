import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

export const myTheme = extendTheme(
    {
        config: {
            initialColorMode: "dark",
            useSystemColorMode: false
        },
        fonts: {
            heading: "Rajdhani,sans-serif",
            body: "Rajdhani, sans-serif"
        }
    },
    withProse({
        baseStyle: {
            span: {
                fontSize: "13pt",
                fontWeight: 500
            },
            p: {
                fontFamily: "sans-serif",
                fontWeight: 500,
                lineHeight: "33px",
                wordSpacing: "2px",
                fontSize: "13pt",
                color: "#c1bbbb"
            },
            "h2, h2 > span": {
                fontSize: "28pt",
                fontWeight: 700
            }
        }
    })
);
