const customClassNames = {
  '.truncated': {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '100%',
  },
  '.absolute-fill': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

const custom = ({ addUtilities }) => {
  addUtilities([customClassNames]);
};

module.exports = {
  customClassNames,
  custom,
};
