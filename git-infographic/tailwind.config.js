/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FDFBF7',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Assuming Inter is available or default sans
            }
        },
    },
    plugins: [],
}
