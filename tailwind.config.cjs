const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      'xxs': '450px',
      'xs': '576px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': "var(--color-primary)",
        'primary-offset': "var(--color-primary-offset)",
        'secondary': "var(--color-secondary)",
        'secondary-offset': "var(--color-secondary-offset)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      variants: {
        animation: ["motion-safe"]
      },
      animation: {
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            'background-position': '80% 80%',
          },
          '50%': {
            'background-position': '40% 40%',
          },
          '100%': {
            'background-position': '80% 80%',
          },
        },
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
  darkMode: 'class',
};