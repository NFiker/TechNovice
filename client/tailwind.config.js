// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            DMSerifDisplay: ['"DM Serif Display"', 'serif'],
        },
        extend: {},
    },
    plugins: [],
};
