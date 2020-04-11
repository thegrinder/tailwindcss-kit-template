const displayPlugin = ({ addUtilities }) => {
  const utilities = [
    {
      '.dn': { display: 'none' },
      '.di': { display: 'inline' },
      '.db': { display: 'block' },
      '.dib': { display: 'inline-block' },
    },
  ];
  addUtilities(utilities);
};

module.exports = displayPlugin;
