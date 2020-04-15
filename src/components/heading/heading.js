const { mapThemeToClasses } = require('../../helpers');
const { headingColors } = require('./theme/headingTheme');

const headingPlugin = ({ addComponents, e }) => {
  const [lightModeHeadingColors, darkModeHeadingColors] = mapThemeToClasses(
    headingColors,
    (colorMode, color, emphasis) => ({
      [`.${e(`${colorMode}:heading-color-${color}--${emphasis}`)}`]: {
        color: headingColors[colorMode][color][emphasis],
      },
    })
  );

  addComponents({
    ...lightModeHeadingColors,
    ...darkModeHeadingColors,
  });
};

module.exports = headingPlugin;
