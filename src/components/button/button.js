const { colorModes } = require('../../colors');
const { buttonSizes, buttonTypes } = require('./theme/buttonTheme');

const buttonPlugin = ({ addComponents }) => {
  const btnBaseStyle = {
    '.btn': {
      border: 'none',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
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

  const [lightModeBtnTypes, darkModeBtnTypes] = colorModes.map((colorMode) =>
    Object.keys(buttonTypes[colorMode]).reduce(
      (classNames, type) => ({
        ...classNames,
        ...Object.keys(buttonTypes[colorMode][type]).reduce(
          (acc, emphasis) => ({
            ...acc,
            [`.${colorMode}-mode .btn-type-${type}.btn-emphasis-${emphasis}`]: {
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

  const buttonIcons = {
    '.btn-icon-start': {
      lineHeight: '0',
      marginRight: '.25rem',
    },
    '.btn-icon-end': {
      lineHeight: '0',
      marginLeft: '.25rem',
    },
  };

  addComponents({
    ...btnBaseStyle,
    ...btnSizeStyles,
    ...lightModeBtnTypes,
    ...darkModeBtnTypes,
    ...buttonIcons,
  });
};

module.exports = buttonPlugin;
