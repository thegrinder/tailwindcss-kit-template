const { colorModes } = require('../../colors');
const { textColors, textSizes } = require('./theme/textTheme');

const textPlugin = ({ addComponents }) => {
  const textSizeStyles = Object.keys(textSizes).reduce(
    (acc, next) => ({
      ...acc,
      [`.text-size-${next}`]: {
        ...textSizes[next],
        fontFamily: `'Inter var', sans-serif`,
        fontWeight: '400',
        lineHeight: '1',
        padding: '0',
        margin: '0',
      },
    }),
    {}
  );

  const [lightModeTextColors, darkModeTextColors] = colorModes.map(
    (colorMode) =>
      Object.keys(textColors[colorMode]).reduce(
        (classNames, color) => ({
          ...classNames,
          ...Object.keys(textColors[colorMode][color]).reduce(
            (acc, emphasis) => ({
              ...acc,
              [`.${colorMode}-mode .text-color-${color}--${emphasis}`]: {
                color: textColors[colorMode][color][emphasis],
              },
            }),
            {}
          ),
        }),
        {}
      )
  );

  addComponents({
    ...textSizeStyles,
    ...lightModeTextColors,
    ...darkModeTextColors,
  });
};

module.exports = textPlugin;
