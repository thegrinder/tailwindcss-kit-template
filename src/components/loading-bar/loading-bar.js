const { lightModeKey, darkModeKey } = require('../../colors');
const { loadingBarTheme } = require('./theme/loading-bar-theme');

const loadingBarPlugin = ({ addComponents, e }) => {
  const loadingBarBase = {
    '@keyframes increase': {
      from: {
        left: '-15%',
        width: '5%',
      },
      to: {
        left: '130%',
        width: '100%',
      },
    },
    '@keyframes decrease': {
      from: {
        left: '-80%',
        width: '80%',
      },
      to: {
        left: '110%',
        width: '10%',
      },
    },
    '.loading-bar': {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      height: '.25rem',
      opacity: '.7',
      '&:before, &:after': {
        content: `""`,
        position: 'absolute',
        height: '.25rem',
        width: '10%',
        left: '-15%',
      },
      '&:after': {
        animation: 'increase 2s infinite',
      },
      '&:before': {
        animation: 'decrease 2s 0.5s infinite',
      },
    },
  };

  const loadingBarModes = {
    [`.${e(`${lightModeKey}:loading-bar`)}`]: {
      background: loadingBarTheme[lightModeKey].barBackground,
      '&:after': {
        background: loadingBarTheme[lightModeKey].barColor,
      },
    },
    [`.${e(`${darkModeKey}:loading-bar`)}`]: {
      background: loadingBarTheme[darkModeKey].barBackground,
      '&:after': {
        background: loadingBarTheme[darkModeKey].barColor,
      },
    },
  };

  addComponents({
    ...loadingBarBase,
    ...loadingBarModes,
  });
};

module.exports = loadingBarPlugin;
