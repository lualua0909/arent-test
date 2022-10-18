/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {},
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        spacing: {
            '64': '64px',
        },
        colors: {
            neutral: {
                900: "#2E2E2E",
                700: "#414141",
            },
            white: "#ffffff",
            amber: {
                500: "#FF963C",
                400: "#FFCC21",
                300: "#facf40"
            },
            slate: {
                500: "#777777"
            }
        }
    },
    plugins: [],
}
