const lineHeightPlugin = ({ addUtilities, config }) => {
  const lineHeightConfig = config('theme.lineHeight');
  const utilities = Object.keys(lineHeightConfig).map((lineHeightKey) => ({
    [`.lh-${lineHeightKey}`]: { lineHeight: lineHeightConfig[lineHeightKey] },
  }));
  addUtilities(utilities);
};

module.exports = lineHeightPlugin;
