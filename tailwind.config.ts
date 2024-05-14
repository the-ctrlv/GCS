import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        genos: ['var(--font-genos)'],
      },
      colors: {
        dark: '#222229',
        white: '#E9E5DC',
        bGray: '#4A494D',
        bGrayLight: '#B4B4B6',
        danger: '#EE2F46',
      },
    },
  },
  plugins: [],
}
export default config
