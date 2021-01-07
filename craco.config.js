const isDev = process.env.NODE_ENV === 'production';

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // require('@fullhuman/postcss-purgecss')({
        //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        // }),
      ],
    },
  },
}
