const { mapNestedThemeToClasses } = require('../../helpers');
const { colors } = require('../../colors');

const backgroundColorPlugin = ({ addUtilities, e }) => {
  const [lightModeBgColors, darkModeBgColors] = mapNestedThemeToClasses(
    colors,
    (colorMode, variant, num) => ({
      [`.${e(`${colorMode}:bg-${variant}-${num}`)}`]: {
        backgroundColor: colors[colorMode][variant][num],
      },
    })
  );

  addUtilities({
    ...lightModeBgColors,
    ...darkModeBgColors,
  });
};

module.exports = backgroundColorPlugin;
