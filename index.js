// utilities
const flexGrid = require('./src/utilities/flex-grid');
const spacing = require('./src/utilities/spacing');
const borderRadius = require('./src/utilities/border-radius');
const border = require('./src/utilities/border');
const custom = require('./src/utilities/custom');
const display = require('./src/utilities/display');
const fontWeight = require('./src/utilities/font-weight');
const textAlign = require('./src/utilities/text-align');

// components
const button = require('./src/components/button/button');
const text = require('./src/components/text/text');
const heading = require('./src/components/heading/heading');

module.exports = [
  borderRadius,
  flexGrid,
  spacing,
  border,
  custom,
  display,
  fontWeight,
  textAlign,
  button,
  text,
  heading,
];
