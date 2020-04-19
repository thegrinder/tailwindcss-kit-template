const { lightModeKey, darkModeKey } = require('../../colors');
const { dividerTheme } = require('./theme/divider-theme');

const dividerPlugin = ({ addComponents, e }) => {
  const dividerBase = {
    '.divider': {
      display: 'block',
      width: '100%',
      height: '1px',
      opacity: '.1',
    },
  };

  const dividerModes = {
    [`.${e(`${lightModeKey}:divider`)}`]: dividerTheme[lightModeKey],
    [`.${e(`${darkModeKey}:divider`)}`]: dividerTheme[darkModeKey],
  };

  addComponents({
    ...dividerBase,
    ...dividerModes,
  });
};

module.exports = dividerPlugin;
