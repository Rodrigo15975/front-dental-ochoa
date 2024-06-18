/** @type {import('tailwindcss').Config} */
import variables from "./src/config/tailwind-variables-styled/configVariablesCss";

export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...variables,
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animated"), require("flowbite/plugin")],
};
