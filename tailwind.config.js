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
        border: "rgb(var(--border) / 0.1)", // Special case for this border
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        // Legacy/Direct Access
        cocoa: {
          50: "rgb(var(--cocoa-50) / <alpha-value>)",
          100: "rgb(var(--cocoa-100) / <alpha-value>)",
          200: "rgb(var(--cocoa-200) / <alpha-value>)",
          300: "rgb(var(--cocoa-300) / <alpha-value>)",
          400: "rgb(var(--cocoa-400) / <alpha-value>)",
          500: "rgb(var(--cocoa-500) / <alpha-value>)",
          600: "rgb(var(--cocoa-600) / <alpha-value>)",
          700: "rgb(var(--cocoa-700) / <alpha-value>)",
          800: "rgb(var(--cocoa-800) / <alpha-value>)",
          900: "rgb(var(--cocoa-900) / <alpha-value>)",
          950: "rgb(var(--cocoa-950) / <alpha-value>)",
        },
        gold: {
          50: "rgb(var(--gold-50) / <alpha-value>)",
          100: "rgb(var(--gold-100) / <alpha-value>)",
          200: "rgb(var(--gold-200) / <alpha-value>)",
          300: "rgb(var(--gold-300) / <alpha-value>)",
          400: "rgb(var(--gold-400) / <alpha-value>)",
          500: "rgb(var(--gold-500) / <alpha-value>)",
          600: "rgb(var(--gold-600) / <alpha-value>)",
          700: "rgb(var(--gold-700) / <alpha-value>)",
          800: "rgb(var(--gold-800) / <alpha-value>)",
          900: "rgb(var(--gold-900) / <alpha-value>)",
        },
        cream: {
          50: "rgb(var(--cream-50) / <alpha-value>)",
          100: "rgb(var(--cream-100) / <alpha-value>)",
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
