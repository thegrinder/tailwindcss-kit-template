const { colorModes } = require('../../colors');
const { buttonSizes, buttonTypes } = require('./theme/buttonTheme');

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

  const [lightModeBtnTypes, darkModeBtnTypes] = colorModes.map((colorMode) =>
    Object.keys(buttonTypes[colorMode]).reduce(
      (classNames, type) => ({
        ...classNames,
        ...Object.keys(buttonTypes[colorMode][type]).reduce(
          (acc, emphasis) => ({
            ...acc,
            [`.${colorMode}-mode .btn-type-${type}--${emphasis}`]: {
              ...buttonTypes[colorMode][type][emphasis].normal,
              '&:hover': buttonTypes[colorMode][type][emphasis].hover,
              '&:active': buttonTypes[colorMode][type][emphasis].active,
              '&:disabled': buttonTypes[colorMode][type][emphasis].disabled,
            },
          }),
          {}
        ),
      }),
      {}
    )
  );

  addComponents({
    ...btnBaseStyle,
    ...btnSizeStyles,
    ...squareBtnSizeStyles,
    ...lightModeBtnTypes,
    ...darkModeBtnTypes,
  });
};

module.exports = buttonPlugin;
