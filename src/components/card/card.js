const { colorModes } = require('../../colors');
const { cardElevations } = require('./theme/cardTheme');

const cardPlugin = ({ addComponents, e }) => {
  const cardBaseStyle = {
    '.card': {
      borderRadius: '.5rem',
    },
  };

  const [lightModeCardElevations, darkModeCardElevations] = colorModes.map(
    (colorMode) =>
      Object.keys(cardElevations[colorMode]).reduce(
        (acc, elevation) => ({
          ...acc,
          [`.${e(`${colorMode}:card-elevation-${elevation}`)}`]: cardElevations[
            colorMode
          ][elevation],
        }),
        {}
      )
  );

  addComponents({
    ...cardBaseStyle,
    ...lightModeCardElevations,
    ...darkModeCardElevations,
  });
};

module.exports = cardPlugin;
