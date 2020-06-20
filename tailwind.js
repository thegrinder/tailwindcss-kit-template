// config
const {
  fontWeightsTheme,
} = require('./src/utilities/font-weight/font-weight-theme');
const { flexGridTheme } = require('./src/utilities/flex-grid/flex-grid-theme');
const { fontSizeTheme } = require('./src/utilities/font-size/font-size-theme');
const {
  lineHeightTheme,
} = require('./src/utilities/line-height/line-height-theme');

// base
const base = require('./src/base/base');

// variants
const { screensTheme } = require('./src/variants/responsiveness');

// utilities
const {
  backgroundColor,
} = require('./src/color-utilities/background-color/background-color');
const { border } = require('./src/utilities/border/border');
const { borderRadius } = require('./src/utilities/border-radius/border-radius');
const { custom } = require('./src/utilities/custom/custom');
const { display } = require('./src/utilities/display/display');
const { flexGrid } = require('./src/utilities/flex-grid/flex-grid');
const { fontWeight } = require('./src/utilities/font-weight/font-weight');
const { spacing } = require('./src/utilities/spacing/spacing');
const { textAlign } = require('./src/utilities/text-align/text-align');
const { textColor } = require('./src/color-utilities/text-color/text-color');

// components
const button = require('./src/components/button/button');
const card = require('./src/components/card/card');
const checkbox = require('./src/components/checkbox/checkbox');
const divider = require('./src/components/divider/divider');
const icon = require('./src/components/icon/icon');
const input = require('./src/components/input/input');
const link = require('./src/components/link/link');
const loadingBar = require('./src/components/loading-bar/loading-bar');
const modal = require('./src/components/modal/modal');
const outlinedLabel = require('./src/components/outlined-label/outlined-label');
const spinner = require('./src/components/spinner/spinner');

module.exports = {
  theme: {
    grid: flexGridTheme,
    inset: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
    },
    screens: screensTheme,
    fontWeights: fontWeightsTheme,
    fontSize: fontSizeTheme,
    lineHeight: lineHeightTheme,
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
    'opacity',
    'overflow',
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
    checkbox,
    custom,
    display,
    divider,
    flexGrid,
    fontWeight,
    icon,
    input,
    link,
    loadingBar,
    modal,
    outlinedLabel,
    spacing,
    spinner,
    textAlign,
    textColor,
  ],
  options: {
    important: false,
    prefix: '',
    separator: ':',
  },
};
