module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js",
      // TypeScript
      "plugins/**/*.ts",
      "nuxt.config.ts"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#FCD34D", //light yellow
          500: "#B26E12" //golden
        },
        secondary: {
          100: "#dff7d5", //very light green
          200: "#32CD32", //green
          400: "#78f547", //light green
          500: "#32AFC8;" //blue
        },
        accent: {
          100: "#faebeb", //very light red
          500: "#ff8c00", //light-orange
          600: "#C53193;", //pink
          700: "#ff4500", //orange
          800: "#c30b4e", //dark-pink
          900: "#FF461B;" //red
        }
      },
      fontFamily: {
        sans: ["Inter"]
      },
      spacing: {
        '128': '32rem',

      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-rtl")]
};
