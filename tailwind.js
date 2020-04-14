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

module.exports = {
  theme: {
    grid: {
      columns: 12,
    },
    inset: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontWeights: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    lineHeight: {
      0: 0,
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vw',
    }),
  },
  variants: {
    alignContent: [],
    alignItems: [],
    alignSelf: [],
    flex: [],
    flexDirection: [],
    flexGrow: [],
    flexShrink: [],
    flexWrap: [],
    fontSize: ['responsive'],
    fontStyle: [],
    height: [],
    inset: [],
    justifyContent: [],
    letterSpacing: [],
    lineHeight: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    overflow: [],
    position: [],
    width: [],
    zIndex: [],
  },
  corePlugins: [
    'alignContent',
    'alignItems',
    'alignSelf',
    'display',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'fontStyle',
    'fontSize',
    'height',
    'inset',
    'justifyContent',
    'letterSpacing',
    'lineHeight',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'overflow',
    'position',
    'width',
    'zIndex',
  ],
  plugins: [
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
  ],
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
