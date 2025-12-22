/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'failure-red': '#FF0000',
                'cream': '#FDFBF7', // The soft brownish/paper color
            },
            fontFamily: {
                // Default to sans for now, can add cinematic fonts later
            }
        },
    },
    plugins: [],
}
