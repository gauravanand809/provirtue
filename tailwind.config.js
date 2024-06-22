/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#191a23",
        gray: {
          "100": "#898989",
          "200": "#292a32",
        },
        green: "#b9ff66",
        black: "#000",
        grey: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        p: "'Space Grotesk'",
      },
      borderRadius: {
        "26xl": "45px",
        sm: "14px",
        "6xs": "7px",
        "10xl": "29px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      base: "1rem",
      "11xl": "1.875rem",
      "41xl": "3.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
