const { inputTheme } = require('./theme/input-theme');

const inputPlugin = ({ addComponents, e }) => {
  const inputBase = {
    '.input': {
      height: '2.75rem',
      padding: '0 .625rem',
    },
    '.select': {
      textTransform: 'none',
      padding: '0 .625rem',
      height: '2.75rem',
    },
    '.textarea': {
      padding: '.25rem .625rem',
      overflow: 'auto',
    },
  };

  const [inputLightMode, inputDarkMode] = Object.keys(inputTheme).map(
    (colorMode) => {
      const { normal, valid, invalid } = inputTheme[colorMode];
      return {
        [`.${e(`${colorMode}:input-normal`)}`]: {
          ...normal.base,
          '&:focus': normal.active,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:input-valid`)}`]: {
          ...valid.base,
          '&:focus': valid.active,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:input-invalid`)}`]: {
          ...invalid.base,
          '&:focus': invalid.active,
          '&:disabled': normal.disabled,
        },
      };
    }
  );

  addComponents({
    ...inputBase,
    ...inputLightMode,
    ...inputDarkMode,
  });
};

module.exports = inputPlugin;
