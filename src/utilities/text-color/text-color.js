const { mapThemeToClasses } = require('../../helpers');
const { colors } = require('../../colors');

const textColorPlugin = ({ addUtilities, e }) => {
  const [lightModeTextColors, darkModeTextColors] = mapThemeToClasses(
    colors,
    (colorMode, variant, num) => ({
      [`.${e(`${colorMode}:text-${variant}-${num}`)}`]: {
        color: colors[colorMode][variant][num],
      },
    })
  );

  addUtilities({
    ...lightModeTextColors,
    ...darkModeTextColors,
  });
};

module.exports = textColorPlugin;
