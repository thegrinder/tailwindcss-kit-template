const { mapNestedThemeToClasses } = require('../../helpers');
const { linkVariants } = require('./theme/linkTheme');

const buttonPlugin = ({ addComponents, e }) => {
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

  const [lightModeLink, darkModeLink] = mapNestedThemeToClasses(
    linkVariants,
    (colorMode, variant) => ({
      [`.${e(`${colorMode}:link-variant-${variant}`)}`]: {
        ...linkVariants[colorMode][variant].normal,
        '&:hover': linkVariants[colorMode][variant].hover,
      },
    })
  );

  addComponents({
    ...linkBase,
    ...lightModeLink,
    ...darkModeLink,
  });
};

module.exports = buttonPlugin;
