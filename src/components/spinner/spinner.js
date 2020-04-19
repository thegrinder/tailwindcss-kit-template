const { spinnerSizes } = require('./theme/spinner-theme');

const spinnerPlugin = ({ addComponents }) => {
  const spinnerBase = {
    '@keyframes grow': {
      '0%': {
        transform: 'scale(0)',
      },
      '50%': {
        opacity: '1',
      },
    },
    '.spinner': {
      display: 'inline-block',
      verticalAlign: 'text-bottom',
      backgroundColor: 'currentColor',
      borderRadius: '50%',
      opacity: '0',
      animation: 'grow 0.75s 0s infinite linear',
    },
  };
  const sizes = Object.keys(spinnerSizes).reduce(
    (classNames, size) => ({
      ...classNames,
      [`.spinner-size-${size}`]: {
        width: spinnerSizes[size].size,
        height: spinnerSizes[size].size,
      },
    }),
    {}
  );
  addComponents({
    ...spinnerBase,
    ...sizes,
  });
};

module.exports = spinnerPlugin;
