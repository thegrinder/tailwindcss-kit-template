// base
const base = require('./src/base/base');

// utilities
const flexGrid = require('./src/utilities/flex-grid');
const spacing = require('./src/utilities/spacing');
const borderRadius = require('./src/utilities/border-radius');
const border = require('./src/utilities/border');
const custom = require('./src/utilities/custom');
const display = require('./src/utilities/display');
const fontWeight = require('./src/utilities/font-weight');
const textAlign = require('./src/utilities/text-align');
const backgroundColor = require('./src/utilities/background-color/background-color');
const textColor = require('./src/utilities/text-color/text-color');

// components
const button = require('./src/components/button/button');
const link = require('./src/components/link/link');
const card = require('./src/components/card/card');
const modal = require('./src/components/modal/modal');
const spinner = require('./src/components/spinner/spinner');
const divider = require('./src/components/divider/divider');
const loadingBar = require('./src/components/loading-bar/loading-bar');

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
    opacity: [],
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
    'fontSize',
    'fontStyle',
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
    'opacity',
    'position',
    'width',
    'zIndex',
  ],
  plugins: [
    backgroundColor,
    base,
    border,
    borderRadius,
    button,
    card,
    custom,
    display,
    divider,
    flexGrid,
    fontWeight,
    link,
    loadingBar,
    modal,
    spacing,
    spinner,
    textAlign,
    textColor,
  ],
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
