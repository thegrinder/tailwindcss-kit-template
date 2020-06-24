const { toggleTheme } = require('./theme/toggle-theme');

const togglePlugin = ({ addComponents, e }) => {
  const sliderSize = 1.5;
  const toggleBase = {
    '.toggle-input': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      margin: '-1px',
      border: '0',
      clip: 'rect(0 0 0 0)',
      overflow: 'hidden',
      '& + .toggle-slider:before': {
        left: '0',
      },
      '&:checked + .toggle-slider:before': {
        left: `calc(100% - ${sliderSize}rem)`,
      },
      '&:disabled + .toggle-slider': {
        opacity: '0.5',
        cursor: 'default',
      },
    },
    '.toggle-slider': {
      position: 'relative',
      display: 'inline-flex',
      width: '3.5rem',
      borderRadius: '9999px',
      transition: 'background-color 0.2s',
      cursor: 'pointer',
      opacity: '1',
      padding: '0.25rem',
      '&:before': {
        content: "''",
        position: 'relative',
        transition: 'left 0.2s',
        height: `${sliderSize}rem`,
        width: `${sliderSize}rem`,
        backgroundColor: '#fff',
        borderRadius: '100%',
      },
    },
  };

  const [toggleLightMode, toggleDarkMode] = Object.keys(toggleTheme).map(
    (colorMode) => {
      const { normal, checked } = toggleTheme[colorMode];
      return {
        [`.${e(`${colorMode}:toggle-input`)}`]: {
          '& + span': normal,
          '&:checked + span': checked,
        },
      };
    }
  );

  addComponents({
    ...toggleBase,
    ...toggleLightMode,
    ...toggleDarkMode,
  });
};

module.exports = togglePlugin;
