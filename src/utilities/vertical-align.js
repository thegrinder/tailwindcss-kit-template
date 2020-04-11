const verticalAlignPlugin = ({ addUtilities }) => {
  const modifiers = {
    base: 'base',
    mid: 'middle',
    top: 'top',
    btm: 'bottom',
  };
  const utilities = Object.keys(modifiers).map((modifier) => ({
    [`.v-${modifier}`]: {
      verticalAlign: modifiers[modifier],
    },
  }));
  addUtilities(utilities);
};

module.exports = verticalAlignPlugin;
