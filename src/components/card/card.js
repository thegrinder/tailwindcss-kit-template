const { mapFlatThemeToClasses } = require('../../helpers');
const { cardElevations } = require('./theme/cardTheme');

const cardPlugin = ({ addComponents, e }) => {
  const cardBase = {
    '.card': {
      borderRadius: '.5rem',
    },
  };

  const [lightModeCard, darkModeCard] = mapFlatThemeToClasses(
    cardElevations,
    (colorMode, elevation) => ({
      [`.${e(`${colorMode}:card-elevation-${elevation}`)}`]: cardElevations[
        colorMode
      ][elevation],
    })
  );

  addComponents({
    ...cardBase,
    ...lightModeCard,
    ...darkModeCard,
  });
};

module.exports = cardPlugin;
