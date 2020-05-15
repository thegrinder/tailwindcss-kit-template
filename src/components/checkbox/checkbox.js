const { checkboxTheme } = require('./theme/checkbox-theme');

const checkboxPlugin = ({ addComponents, e }) => {
  const checkboxBase = {
    '.checkbox': {
      height: '1.5em',
      width: '1.5em',
      borderRadius: '0.25em',
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
          content: `""`,
          position: 'absolute',
          top: '24%',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '50%',
          height: '25%',
          transform: 'rotate(-50deg)',
          borderBottom: '0.2em solid #fff',
          borderLeft: '0.2em solid #fff',
        },
      },
    },
  };

  const [checkboxLightMode, checkboxDarkMode] = Object.keys(checkboxTheme).map(
    (colorMode) => {
      const { normal, invalid, valid } = checkboxTheme[colorMode];
      return {
        [`.${e(`${colorMode}:checkbox-normal`)}`]: {
          ...normal.base,
          '&:focus': normal.active,
          '&:checked': normal.checked,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:checkbox-valid`)}`]: {
          ...valid.base,
          '&:focus': valid.active,
          '&:checked': valid.checked,
          '&:disabled': normal.disabled,
        },
        [`.${e(`${colorMode}:checkbox-invalid`)}`]: {
          ...invalid.base,
          '&:focus': invalid.active,
          '&:disabled': normal.disabled,
        },
      };
    }
  );

  addComponents({
    ...checkboxBase,
    ...checkboxLightMode,
    ...checkboxDarkMode,
  });
};

module.exports = checkboxPlugin;
