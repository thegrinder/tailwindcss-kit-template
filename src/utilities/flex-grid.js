const getIndices = (n) => Array.from(Array(n).keys());

const flexGridPlugin = ({ addUtilities, config }) => {
  const columns = config('theme.grid.columns');
  const utilities = [
    {
      '.col': {
        flexBasis: '0',
        flexGrow: '1',
        maxWidth: '100%',
      },
    },
    {
      '.col-auto': {
        flex: '0 0 auto',
        width: 'auto',
        maxWidth: 'none',
      },
    },
    ...getIndices(columns).map((num) => ({
      [`.col-${num + 1}`]: {
        maxWidth: `${((num + 1) / columns) * 100}%`,
        flex: `0 0 ${((num + 1) / columns) * 100}%`,
      },
    })),
  ];

  const commaSeperatedColClasses = utilities.reduce((acc, next) => {
    const nextClass = Object.keys(next)[0];
    return acc ? `${acc}, ${nextClass}` : nextClass;
  }, '');

  addUtilities(
    [
      {
        [commaSeperatedColClasses]: {
          width: '100%',
          minHeight: '1px',
        },
      },
    ],
    ['responsive']
  );
  addUtilities(utilities, ['responsive']);
};

module.exports = flexGridPlugin;
