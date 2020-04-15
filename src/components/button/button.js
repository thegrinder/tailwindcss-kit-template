const { mapThemeToClasses } = require('../../helpers');
const { buttonSizes, buttonVariants } = require('./theme/buttonTheme');

const buttonPlugin = ({ addComponents }) => {
  const btnBaseStyle = {
    '.btn': {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: '0.2s ease-in-out',
      transitionProperty: 'color, background-color, border-color',
      cursor: 'pointer',
      outline: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      borderRadius: '.5rem',
      fontWeight: '600',
      fontFamily: `'Inter var', sans-serif`,
      '&:disabled': {
        cursor: 'default',
      },
    },
  };

  const btnSizeStyles = Object.keys(buttonSizes).reduce(
    (acc, next) => ({
      ...acc,
      [`.btn-size-${next}`]: buttonSizes[next],
    }),
    {}
  );

  const squareBtnSizeStyles = Object.keys(buttonSizes).reduce(
    (acc, next) => ({
      ...acc,
      [`.btn-square-size-${next}`]: {
        width: buttonSizes[next].height,
        height: buttonSizes[next].height,
      },
    }),
    {}
  );

  const [lightModeBtnVariants, darkModeBtnVariants] = mapThemeToClasses(
    buttonVariants,
    (colorMode, variant, emphasis) => ({
      [`.${colorMode}-mode .btn-variant-${variant}--${emphasis}`]: {
        ...buttonVariants[colorMode][variant][emphasis].normal,
        '&:hover': buttonVariants[colorMode][variant][emphasis].hover,
        '&:active': buttonVariants[colorMode][variant][emphasis].active,
        '&:disabled': buttonVariants[colorMode][variant][emphasis].disabled,
      },
    })
  );

  addComponents({
    ...btnBaseStyle,
    ...btnSizeStyles,
    ...squareBtnSizeStyles,
    ...lightModeBtnVariants,
    ...darkModeBtnVariants,
  });
};

module.exports = buttonPlugin;
