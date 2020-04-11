const fontWeightPlugin = ({ addUtilities, config }) => {
  const fontWeightConfig = config('theme.fontWeights');
  const utilities = Object.keys(fontWeightConfig).map((fontWeightKey) => ({
    [`.fw-${fontWeightKey}`]: { fontWeight: fontWeightConfig[fontWeightKey] },
  }));
  addUtilities(utilities);
};

module.exports = fontWeightPlugin;
