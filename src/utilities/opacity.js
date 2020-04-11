const opacityPlugin = ({ addUtilities, config }) => {
  const opacityConfig = config('theme.opacity');
  const utilities = Object.keys(opacityConfig).map((opacityKey) => ({
    [`.o-${opacityKey}`]: { opacity: opacityConfig[opacityKey] },
  }));
  addUtilities(utilities);
};

module.exports = opacityPlugin;
