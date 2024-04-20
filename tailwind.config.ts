import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '38rem',
      }
    }
  }
} satisfies Config;
