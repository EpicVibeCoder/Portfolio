/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: {
          50: "#fbf5f2",
          100: "#f5e9e2",
          200: "#ecd3c4",
          300: "#dfb6fc", // Typo fix in next step if needed, but sticking to brown scale
          // Let's use a real brown scale
          400: "#9c6f56",
          500: "#7d523e",
          600: "#613428", // Original Secondary
          700: "#4f2717",
          800: "#422218",
          900: "#381e16", // Deep background
          950: "#2a1208", // Original Primary
        },
        gold: {
          50: "#fdf9e8",
          100: "#fbf1c5",
          200: "#f6e18e",
          300: "#efcb4d",
          400: "#e8b21e",
          500: "#d49b10", // Darker gold
          600: "#b27b0b",
          700: "#BE9270", // Original "Gold/Caramel"
          800: "#78500e",
          900: "#664212",
        },
        cream: {
          50: "#FDF5E6", // Old Lace
          100: "#F8EED9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        display: ["var(--font-mystery)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cocoa-mesh":
          "radial-gradient(at 0% 0%, hsla(25,47%,15%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(28,40%,25%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(25,47%,15%,1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
