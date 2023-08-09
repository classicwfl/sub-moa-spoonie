import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
                "accent-7": "#333",
                "text-color": "#fff",
                darkbg: "rgb(24, 26, 28)",
            },
            spacing: {
                "13": "3.25rem",
                "15": "3.75rem",
                "30": "7.5rem",
                "60": "15rem",
                "128": "32rem",
                "144": "36rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: "1",
                neg: ".8",
            },
            fontFamily: {
                sans: ["lorimer-no-2", "sans-serif"],
                bighead: ["lorimer-no-2-condensed", "sans-serif"],
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "3.25rem",
                "7xl": "4.5rem",
                "sideby": "6rem",
                "8xl": "7.25rem",
                "9xl": "9.25rem",
            },
            maxWidth: {
                contentinner: "1150px",
                big: "1920px",
            },
            backgroundImage: {
                inactive:
                    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) .01%, rgba(255,255,255,.0) .02%, rgba(255,255,255,0) 100%);",
                active: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 99.98%, rgba(255,255,255,.0) 99.99%, rgba(255,255,255,0) 100%);",
            },
            boxShadow: {
                inactive: "-0 0 0 0px rgb(255,255,255) inset",
                active: "-0 0 0 600px rgb(255,255,255) inset",
            },
            screens: {
                'heromax': '1800px',
            },
        },
    },
    plugins: [],
};
export default config;
