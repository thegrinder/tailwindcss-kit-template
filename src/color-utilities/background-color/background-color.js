const { mapNestedThemeToClasses } = require('../../helpers');
const { colors } = require('../../colors');

const backgroundColor = ({ addUtilities, e }) => {
  const backgroundColorModes = mapNestedThemeToClasses(
    colors,
    (colorMode, variant, num) => ({
      [`.${e(`${colorMode}:bg-${variant}-${num}`)}`]: {
        backgroundColor: colors[colorMode][variant][num],
      },
    })
  );

  addUtilities(backgroundColorModes);
};

module.exports = { backgroundColor };
