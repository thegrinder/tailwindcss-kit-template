const tailwindcss = require('tailwindcss');

module.exports = {
  pathPrefix: '/tailwindcss-kit-template',
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwindcss('../tailwind.js')],
      },
    },
  ],
};
