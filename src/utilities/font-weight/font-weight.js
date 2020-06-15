const { fontWeightTheme } = require('./font-weight-theme');

const fontWeightClassNames = Object.keys(fontWeightTheme).reduce(
  (acc, fontWeightKey) => ({
    ...acc,
    [`.fw-${fontWeightKey}`]: { fontWeight: fontWeightTheme[fontWeightKey] },
  }),
  {}
);

const fontWeight = ({ addUtilities }) => {
  addUtilities([fontWeightClassNames]);
};

module.exports = {
  fontWeight,
  fontWeightClassNames,
};
