const customPlugin = ({ addUtilities }) => {
  const utilities = [
    {
      html: {
        width: '100%',
        height: '100%',
      },
      body: {
        fontSize: '16px',
        height: '100%',
        minHeight: '30rem',
        width: '100%',
        minWidth: '20rem',
        margin: '0',
        boxSizing: 'border-box',
      },
      '.list': {
        listStyleType: 'none',
        padding: 0,
      },
      '.truncated': {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxWidth: '100%',
      },
      '.absolute-fill': {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  ];
  addUtilities(utilities);
};

module.exports = customPlugin;
