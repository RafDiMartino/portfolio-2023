/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "black": "var(--color-black)",
        "white": "var(--color-white)",
        "primary": "var(--color-primary)",
        "accent": "var(--color-accent)",
      },
      fontFamily: {
        header: ['var(--font-header)'],
        body: ["var(--font-body)"]
      },
      screens: {
        'xs': '465px',
        // => @media (min-width: 992px) { ... }
      }
    },
  },
  plugins: [],
}
