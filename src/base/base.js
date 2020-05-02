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
    'p, label, li': {
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
      '&:hover, &:focus, &:active, &:visited': {
        textDecoration: 'none',
      },
      '&:disabled': {
        cursor: 'default',
      },
    },
    fieldset: {
      minWidth: '0',
      padding: '0.01em 0 0 0',
    },
    legend: {
      display: 'table',
      fontSize: config('theme.fontSize.base'),
    },
    'input, textarea, select': {
      '-webkit-appearance': 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      maxWidth: '100%',
      width: '100%',
      borderRadius: '.375rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      boxShadow: '0 0 0 2px transparent',
      transition: '0.2s ease-in-out',
      transitionProperty: 'color, background-color, border, box-shadow',
      fontSize: config('theme.fontSize.base'),
      fontFamily: `'Inter var', sans-serif`,
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        cursor: 'default',
      },
      '&::placeholder': {
        color: 'inherit',
      },
    },
  };
  addBase(base);
};

module.exports = basePlugin;
