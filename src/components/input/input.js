const { mapFlatThemeToClasses } = require('../../helpers');
const { inputTheme } = require('./theme/input-theme');

const inputPlugin = ({ addComponents, e }) => {
  const inputBase = {
    '.input': {
      height: '2.5rem',
      padding: '0 .625rem',
    },
    '.select': {
      textTransform: 'none',
      padding: '0 .625rem',
      height: '2.5rem',
    },
    '.textarea': {
      padding: '.25rem .625rem',
      overflow: 'auto',
    },
  };
  const inputModes = mapFlatThemeToClasses(inputTheme, (colorMode, state) => ({
    ...(state === 'valid' || state === 'invalid'
      ? {
          [`.${e(`${colorMode}:input-${state}`)}`]: {
            ...inputTheme[colorMode][state],
            '&:focus': inputTheme[colorMode][state],
            '&:disabled': inputTheme[colorMode].disabled,
          },
        }
      : {
          [`.${e(`${colorMode}:input`)}`]: {
            ...inputTheme[colorMode].base,
            '&:focus': inputTheme[colorMode].active,
            '&:disabled': inputTheme[colorMode].disabled,
          },
        }),
  }));

  addComponents({
    ...inputBase,
    ...inputModes,
  });
};

module.exports = inputPlugin;
