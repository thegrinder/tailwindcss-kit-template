const borderRadius = ({ addUtilities, config }) => {
  const borderRadiusConfig = config('theme.borderRadius');
  const borderRadiusClassNames = Object.keys(borderRadiusConfig).map(
    (sizeKey) => ({
      [`.br-${sizeKey}`]: { borderRadius: borderRadiusConfig[sizeKey] },
    })
  );
  addUtilities(borderRadiusClassNames);
};

module.exports = { borderRadius };
