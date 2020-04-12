const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwindcss('../tailwind.js')],
      },
    },
  ],
};
