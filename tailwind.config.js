/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                quicksand: "Quicksand",
            },
        },
    },
    daisyui: {
        themes: ["cupcake"],
    },
    plugins: [require("daisyui")],
};
