const { mapNestedThemeToClasses } = require('../../helpers');
const { linkVariants } = require('./theme/link-theme');

const linkPlugin = ({ addComponents, e }) => {
  const linkBase = {
    '.link': {
      fontFamily: `'Inter var', sans-serif`,
      backgroundColor: 'transparent',
      border: 'none',
      overflow: 'visible',
      display: 'inline-block',
      verticalAlign: 'middle',
      outline: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      marginBottom: '0',
      '&:hover': {
        outline: 'none',
        textDecoration: 'underline',
      },
    },
  };

  const linkModes = mapNestedThemeToClasses(
    linkVariants,
    (colorMode, variant) => ({
      [`.${e(`${colorMode}:link-variant-${variant}`)}`]: {
        ...linkVariants[colorMode][variant].base,
        '&:hover': linkVariants[colorMode][variant].hover,
      },
    })
  );

  addComponents({
    ...linkBase,
    ...linkModes,
  });
};

module.exports = linkPlugin;
