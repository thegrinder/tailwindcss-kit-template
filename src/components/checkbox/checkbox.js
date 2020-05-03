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
          top: '27%',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '50%',
          height: '25%',
          transform: 'rotate(-50deg)',
          borderBottom: '0.125em solid #fff',
          borderLeft: '0.125em solid #fff',
        },
      },
    },
  };

  const [checkboxLightMode, checkboxDarkMode] = Object.keys(checkboxTheme).map(
    (colorMode) => ({
      [`.${e(`${colorMode}:checkbox-normal`)}`]: {
        ...checkboxTheme[colorMode].normal.base,
        '&:focus': checkboxTheme[colorMode].normal.active,
        '&:checked': checkboxTheme[colorMode].normal.checked,
        '&:disabled': checkboxTheme[colorMode].normal.disabled,
      },
      [`.${e(`${colorMode}:checkbox-invalid`)}`]: {
        ...checkboxTheme[colorMode].invalid.base,
        '&:focus': checkboxTheme[colorMode].invalid.active,
        '&:disabled': checkboxTheme[colorMode].normal.disabled,
      },
    })
  );

  addComponents({
    ...checkboxBase,
    ...checkboxLightMode,
    ...checkboxDarkMode,
  });
};

module.exports = checkboxPlugin;
