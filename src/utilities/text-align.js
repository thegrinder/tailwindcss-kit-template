const textAlignPlugin = ({ addUtilities }) => {
  const modifiers = {
    l: 'left',
    r: 'right',
    c: 'center',
    j: 'justify',
  };
  const utilities = Object.keys(modifiers).map((modifier) => ({
    [`.t${modifier}`]: {
      textAlign: modifiers[modifier],
    },
  }));
  addUtilities(utilities);
};

module.exports = textAlignPlugin;
