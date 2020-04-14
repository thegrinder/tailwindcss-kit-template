const { mapThemeToClasses } = require('../../helpers');
const { textColors } = require('./theme/textTheme');

const textPlugin = ({ addComponents }) => {
  const [lightModeTextColors, darkModeTextColors] = mapThemeToClasses(
    textColors,
    (colorMode, color, emphasis) => ({
      [`.${colorMode}-mode .text-color-${color}--${emphasis}`]: {
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
