const { mapFlatThemeToClasses } = require('../../helpers');
const { cardElevations } = require('./theme/cardTheme');

const cardPlugin = ({ addComponents, e }) => {
  const cardBaseStyle = {
    '.card': {
      borderRadius: '.5rem',
    },
  };

  const [
    lightModeCardElevations,
    darkModeCardElevations,
  ] = mapFlatThemeToClasses(cardElevations, (colorMode, elevation) => ({
    [`.${e(`${colorMode}:card-elevation-${elevation}`)}`]: cardElevations[
      colorMode
    ][elevation],
  }));

  addComponents({
    ...cardBaseStyle,
    ...lightModeCardElevations,
    ...darkModeCardElevations,
  });
};

module.exports = cardPlugin;
