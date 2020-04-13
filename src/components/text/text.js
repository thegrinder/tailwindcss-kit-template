const { colorModes } = require('../../colors');
const { textColors } = require('./theme/textTheme');

const textPlugin = ({ addComponents }) => {
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
    ...lightModeTextColors,
    ...darkModeTextColors,
  });
};

module.exports = textPlugin;
