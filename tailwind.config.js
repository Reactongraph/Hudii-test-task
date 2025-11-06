/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: {
          850: '#1f2937',
        },
        'app-bg': '#101010',
        'sidebar-bg': '#151515',
        'card-bg': '#191919',
        'card-secondary': '#1E1E1E',
        'border-primary': '#252525',
        'border-secondary': '#272727',
        'border-light': '#26272F',
        'border-input': '#1B1C22',
        'text-primary': '#EFEFEF',
        'text-secondary': '#F5F4F3',
        'text-muted': '#A3A3A3',
        'text-error': '#FF554C',
        'accent-teal': '#19C8A7',
        'accent-teal-light': '#19C8A70D',
        'input-bg': '#FFFFFF0D',
        'tag-bg': '#FFFFFF0D',
        'input-border': '#1B1C22',
        'border-select': '#252525',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}