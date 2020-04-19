const { mapFlatThemeToClasses } = require('../../helpers');
const { cardElevations } = require('./theme/card-theme');

const cardPlugin = ({ addComponents, e }) => {
  const cardBase = {
    '.card': {
      borderRadius: '.5rem',
    },
  };

  const cardModes = mapFlatThemeToClasses(
    cardElevations,
    (colorMode, elevation) => ({
      [`.${e(`${colorMode}:card-elevation-${elevation}`)}`]: cardElevations[
        colorMode
      ][elevation],
    })
  );

  addComponents({
    ...cardBase,
    ...cardModes,
  });
};

module.exports = cardPlugin;
