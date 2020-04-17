const { mapThemeToClasses } = require('../../helpers');
const { colors } = require('../../colors');

const backgroundColorPlugin = ({ addUtilities, e }) => {
  const [lightModeBgColors, darkModeBgColors] = mapThemeToClasses(
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
