const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        !isDev && require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        }),
      ],
    },
  },
}
