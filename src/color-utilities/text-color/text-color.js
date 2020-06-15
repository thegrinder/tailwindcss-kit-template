const { mapNestedThemeToClasses } = require('../../helpers');
const { colors } = require('../../colors');

const textColor = ({ addUtilities, e }) => {
  const textColorModes = mapNestedThemeToClasses(
    colors,
    (colorMode, variant, num) => ({
      [`.${e(`${colorMode}:text-${variant}-${num}`)}`]: {
        color: colors[colorMode][variant][num],
      },
    })
  );

  addUtilities(textColorModes);
};

module.exports = { textColor };
