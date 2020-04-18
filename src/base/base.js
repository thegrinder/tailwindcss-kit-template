const basePlugin = ({ addBase, config }) => {
  const base = {
    '*': {
      margin: '0',
      padding: '0',
      border: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline',
    },
    '#app': {
      height: '100%',
      width: '100%',
    },
    html: {
      width: '100%',
      height: '100%',
    },
    body: {
      fontFamily: `'Inter var', sans-serif`,
      fontSize: '16px',
      height: '100%',
      minHeight: '30rem',
      width: '100%',
      minWidth: '20rem',
      boxSizing: 'border-box',
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: `'Inter var', sans-serif`,
      fontWeight: 600,
    },
    h1: {
      fontSize: config('theme.fontSize.4xl'),
    },
    h2: {
      fontSize: config('theme.fontSize.3xl'),
    },
    h3: {
      fontSize: config('theme.fontSize.2xl'),
    },
    h4: {
      fontSize: config('theme.fontSize.xl'),
    },
    h5: {
      fontSize: config('theme.fontSize.lg'),
    },
    h6: {
      fontSize: config('theme.fontSize.base'),
    },
    'p, span, label, li': {
      fontFamily: `'Inter var', sans-serif`,
      fontSize: config('theme.fontSize.base'),
    },
    'ol, ul': {
      listStyleType: 'none',
    },
    'button, a': {
      fontFamily: `'Inter var', sans-serif`,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      outline: 'none',
      textDecoration: 'none',
      fontSize: config('theme.fontSize.base'),
      '&:hover, &:focus, &:active, &:visited': {
        textDecoration: 'none',
      },
      '&:disabled': {
        cursor: 'default',
      },
    },
  };
  addBase(base);
};

module.exports = basePlugin;
