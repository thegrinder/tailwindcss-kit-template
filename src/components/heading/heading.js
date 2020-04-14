const { mapThemeToClasses } = require('../../helpers');
const { headingColors } = require('./theme/headingTheme');

const headingPlugin = ({ addComponents }) => {
  const [lightModeHeadingColors, darkModeHeadingColors] = mapThemeToClasses(
    headingColors,
    (colorMode, color, emphasis) => ({
      [`.${colorMode}-mode .heading-color-${color}--${emphasis}`]: {
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
