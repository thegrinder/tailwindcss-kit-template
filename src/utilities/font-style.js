const fontStylePlugin = ({ addUtilities }) => {
  const utilities = [
    {
      '.i': { fontStyle: 'italic' },
      '.ttc': { textTransform: 'capitalize' },
      '.ttl': { textTransform: 'lowercase' },
      '.ttu': { textTransform: 'uppercase' },
      '.ttn': { textTransform: 'none' },
      '.strike': { textDecoration: 'line-through' },
      '.underline': { textDecoration: 'underline' },
      '.no-underline': { textDecoration: 'none' },
    },
  ];
  addUtilities(utilities);
};

module.exports = fontStylePlugin;
