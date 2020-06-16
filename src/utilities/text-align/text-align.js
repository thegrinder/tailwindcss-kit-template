const modifiers = {
  l: 'left',
  r: 'right',
  c: 'center',
  j: 'justify',
};
const textAlignClassNames = Object.keys(modifiers).reduce(
  (acc, modifier) => ({
    ...acc,
    [`.t${modifier}`]: {
      textAlign: modifiers[modifier],
    },
  }),
  {}
);

const textAlign = ({ addUtilities }) => {
  addUtilities(textAlignClassNames);
};

module.exports = {
  textAlign,
  textAlignClassNames,
};
