/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        'featured': 'var(--featured-color)',
        'accent': 'var(--accent-color)',
        'light-accent': 'var(--light-accent-color)',
        'base-color': 'var(--base-color)',
        'light-base': 'var(--light-base-color)',
      }
    },
  },
  plugins: [],
}
