const borderClassNames = {
  '.bb': {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  '.bt': {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
  },
  '.bl': {
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
  },
  '.br': {
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
  },
  '.ba': {
    borderWidth: '1px',
    borderStyle: 'solid',
  },
};

const border = ({ addUtilities }) => {
  addUtilities([borderClassNames]);
};

module.exports = {
  border,
  borderClassNames,
};
