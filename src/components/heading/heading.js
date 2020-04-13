const { colorModes } = require('../../colors');
const { headingColors } = require('./theme/headingTheme');

const headingPlugin = ({ addComponents }) => {
  const [lightModeHeadingColors, darkModeHeadingColors] = colorModes.map(
    (colorMode) =>
      Object.keys(headingColors[colorMode]).reduce(
        (classNames, color) => ({
          ...classNames,
          ...Object.keys(headingColors[colorMode][color]).reduce(
            (acc, emphasis) => ({
              ...acc,
              [`.${colorMode}-mode .heading-color-${color}--${emphasis}`]: {
                color: headingColors[colorMode][color][emphasis],
              },
            }),
            {}
          ),
        }),
        {}
      )
  );

  addComponents({
    ...lightModeHeadingColors,
    ...darkModeHeadingColors,
  });
};

module.exports = headingPlugin;
