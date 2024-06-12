/** @type {import('tailwindcss').Config} */
// This is using the ESM syntax, so you need to use the .cjs extension
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}

