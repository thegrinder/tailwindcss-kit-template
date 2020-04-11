const tailwindcss = require('tailwindcss');
const prefixer = require('postcss-prefix-selector');

module.exports = {
  plugins: [{
    resolve: 'gatsby-plugin-postcss',
    options: {
      postCssPlugins: [
        tailwindcss('../tailwind.js'),
        prefixer({
          prefix: 'html',
          transform: (_, selector, prefixedSelector) => 
            selector.includes('html') ? selector : prefixedSelector,
        }),
      ],
    }
  }]
}