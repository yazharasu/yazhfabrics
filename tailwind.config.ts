import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      secondary: "#004AAD",
      primary: "#4D8726",
      color_3: "#6F2E03"
    }
  },
  plugins: [],
});

export default config;
