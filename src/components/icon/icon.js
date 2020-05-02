const { mapFlatThemeToClasses } = require('../../helpers');
const { iconVariants } = require('./theme/icon-theme');

const iconPlugin = ({ addComponents, e }) => {
  const iconBase = {
    '.icon': {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '9999px',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const iconModes = mapFlatThemeToClasses(
    iconVariants,
    (colorMode, variant) => ({
      [`.${e(`${colorMode}:icon-${variant}`)}`]: iconVariants[colorMode][
        variant
      ],
    })
  );

  addComponents({
    ...iconBase,
    ...iconModes,
  });
};

module.exports = iconPlugin;
