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

  const [inputLightMode, inputDarkMode] = Object.keys(inputTheme).map(
    (colorMode) => ({
      [`.${e(`${colorMode}:input`)}`]: {
        ...inputTheme[colorMode].normal.base,
        '&:focus': inputTheme[colorMode].normal.active,
        '&:disabled': inputTheme[colorMode].disabled,
      },
      [`.${e(`${colorMode}:input-valid`)}`]: {
        ...inputTheme[colorMode].valid.base,
        '&:focus': inputTheme[colorMode].valid.active,
        '&:disabled': inputTheme[colorMode].disabled,
      },
      [`.${e(`${colorMode}:input-invalid`)}`]: {
        ...inputTheme[colorMode].invalid.base,
        '&:focus': inputTheme[colorMode].invalid.active,
        '&:disabled': inputTheme[colorMode].disabled,
      },
    })
  );

  addComponents({
    ...inputBase,
    ...inputLightMode,
    ...inputDarkMode,
  });
};

module.exports = inputPlugin;
