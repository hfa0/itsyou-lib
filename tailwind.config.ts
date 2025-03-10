import type { Config } from "tailwindcss";
import baseConfig from "./tailwind.base.config";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};

export default config;
