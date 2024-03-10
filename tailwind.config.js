/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
        daisyui: {
            themes: ["light", "dark", "cupcake"],
        },
    },
    plugins: [require("daisyui")],
};
