const { colorModes } = require('../../colors');
const { linkVariants } = require('./theme/linkTheme');

const buttonPlugin = ({ addComponents }) => {
  const linkBaseStyle = {
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

  const [lightModeLinkVariants, darkModeLinkVariants] = colorModes.map(
    (colorMode) =>
      Object.keys(linkVariants[colorMode]).reduce(
        (acc, variant) => ({
          ...acc,
          [`.${colorMode}-mode .link-variant-${variant}`]: {
            ...linkVariants[colorMode][variant].normal,
            '&:hover': linkVariants[colorMode][variant].hover,
          },
        }),
        {}
      )
  );

  addComponents({
    ...linkBaseStyle,
    ...lightModeLinkVariants,
    ...darkModeLinkVariants,
  });
};

module.exports = buttonPlugin;
