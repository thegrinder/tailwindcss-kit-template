const { buttonSizes, buttonTypes } = require('./theme/buttonTheme');

const buttonPlugin = ({ addComponents }) => {
  const btnBaseStyle = {
    '.btn': {
      border: 'none',
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'middle',
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

  const btnTypeStyles = Object.keys(buttonTypes.light).reduce(
    (classNames, type) => ({
      ...classNames,
      ...Object.keys(buttonTypes.light[type]).reduce(
        (acc, emphasis) => ({
          ...acc,
          [`.btn-type-${type}.btn-emphasis-${emphasis}`]: {
            ...buttonTypes.light[type][emphasis].normal,
            '&:hover': buttonTypes.light[type][emphasis].hover,
            '&:active': buttonTypes.light[type][emphasis].active,
            '&:disabled': buttonTypes.light[type][emphasis].disabled,
          },
        }),
        {}
      ),
    }),
    {}
  );

  addComponents({
    ...btnBaseStyle,
    ...btnSizeStyles,
    ...btnTypeStyles,
  });
};

module.exports = buttonPlugin;
