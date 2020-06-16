const getIndices = (n) => Array.from(Array(n).keys());

const getFlexGridClassNames = (columns) => {
  const columnClassNames = {
    '.col': {
      flexBasis: '0',
      flexGrow: '1',
      maxWidth: '100%',
    },
    '.col-auto': {
      flex: '0 0 auto',
      width: 'auto',
      maxWidth: 'none',
    },
    ...getIndices(columns).reduce(
      (acc, num) => ({
        ...acc,
        [`.col-${num + 1}`]: {
          maxWidth: `${((num + 1) / columns) * 100}%`,
          flex: `0 0 ${((num + 1) / columns) * 100}%`,
        },
      }),
      {}
    ),
  };

  const commonColumnClassNames = Object.keys(columnClassNames).reduce(
    (acc, className) => {
      return acc ? `${acc}, ${className}` : className;
    },
    ''
  );

  return {
    [commonColumnClassNames]: {
      width: '100%',
      minHeight: '1px',
    },
    ...columnClassNames,
  };
};

const flexGrid = ({ addUtilities, config }) => {
  const columns = config('theme.grid.columns');
  const flexGridClassNames = getFlexGridClassNames(columns);

  addUtilities(flexGridClassNames, ['responsive']);
};

module.exports = {
  flexGrid,
  getFlexGridClassNames,
};
