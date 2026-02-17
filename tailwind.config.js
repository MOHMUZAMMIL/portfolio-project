/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F0B09',
                surface: '#1A1412',
                accent: '#FF6B35',
                'accent-light': '#FFA630',
                'accent-dark': '#8B3E2F',
                border: '#2D2420',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'main-gradient': 'linear-gradient(to bottom, #0F0B09, #140E0C, #1A1412)',
                'glow-radial': 'radial-gradient(circle at center, rgba(255, 107, 53, 0.15) 0%, transparent 70%)',
            }
        },
    },
    plugins: [],
}
