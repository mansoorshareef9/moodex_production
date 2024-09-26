/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',  // Small devices (mobile)
      md: '768px',  // Medium devices (tablets)
      lg: '1024px', // Large devices (laptops)
      xl: '1280px', // Extra large devices (desktops)
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',  // Default for mobile
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
