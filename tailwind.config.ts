import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1536px" },
            // => @media (max-width: 1535px) { ... }
            "1xl": { max: "1300px" },
            xl: { max: "1180px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1024px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "768px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "570px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
