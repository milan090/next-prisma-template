module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/pages/**/*.tsx",
      "./src/client/components/**/*.tsx",
      "./src/client/layouts/**/*.tsx",
    ],

    // PurgeCSS options
    options: {},
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      borderWidth: {
        3: "3px",
      },
      borderRadius: {
        base: "0.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
