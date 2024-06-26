/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'lucida-black': ['Lucida Blackletter', 'serif'],
        'raleway': ["Raleway", 'sans-serif'],
        'material-symbols-outlined': ["Material Symbols Outlined", 'sans-serif']
      }
    }
  },
  plugins: []
}
