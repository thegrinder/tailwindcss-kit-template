const { mapThemeToClasses } = require('../../helpers');
const { textColors } = require('./theme/textTheme');

const textPlugin = ({ addComponents, e }) => {
  const [lightModeTextColors, darkModeTextColors] = mapThemeToClasses(
    textColors,
    (colorMode, color, emphasis) => ({
      [`.${e(`${colorMode}:text-color-${color}--${emphasis}`)}`]: {
        color: textColors[colorMode][color][emphasis],
      },
    })
  );

  addComponents({
    ...lightModeTextColors,
    ...darkModeTextColors,
  });
};

module.exports = textPlugin;
