const { radioTheme } = require('./theme/radio-theme');

const radioPlugin = ({ addComponents, e }) => {
  const radioBase = {
    '.radio': {
      height: '1.5em',
      width: '1.5em',
      borderRadius: '50%',
      position: 'relative',
      fontSize: '1rem',
      '&:hover': {
        cursor: 'pointer',
      },
      '&:disabled': {
        cursor: 'default',
      },
      '&:checked': {
        '&:after': {
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '0.5em',
          height: '0.5em',
          borderRadius: '50%',
          backgroundColor: '#fff',
        },
      },
    },
  };

  const [radioLightMode, radioDarkMode] = Object.keys(radioTheme).map(
    (colorMode) => {
      const { normal, invalid, valid } = radioTheme[colorMode];
      return {
        [`.${e(`${colorMode}:radio-normal`)}`]: {
          ...normal.base,
          '&:focus': normal.active,
          '&:checked': normal.checked,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:radio-valid`)}`]: {
          ...valid.base,
          '&:focus': valid.active,
          '&:checked': valid.checked,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:radio-invalid`)}`]: {
          ...invalid.base,
          '&:focus': invalid.active,
          '&:disabled': normal.disabled,
        },
      };
    }
  );

  addComponents({
    ...radioBase,
    ...radioLightMode,
    ...radioDarkMode,
  });
};

module.exports = radioPlugin;
