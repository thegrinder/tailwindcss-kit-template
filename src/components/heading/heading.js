const { colorModes } = require('../../colors');
const { headingColors, headingSizes } = require('./theme/headingTheme');

const headingPlugin = ({ addComponents }) => {
  const headingSizeStyles = Object.keys(headingSizes).reduce(
    (acc, next) => ({
      ...acc,
      [`.heading-size-${next}`]: {
        ...headingSizes[next],
        display: 'block',
        fontFamily: `'Inter var', sans-serif`,
        fontWeight: '600',
        letterSpacing: '-0.2px',
        lineHeight: '1',
        padding: '0',
        margin: '0',
      },
    }),
    {}
  );

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
    ...headingSizeStyles,
    ...lightModeHeadingColors,
    ...darkModeHeadingColors,
  });
};

module.exports = headingPlugin;
