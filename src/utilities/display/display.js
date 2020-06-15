const displayClassNames = {
  '.dn': { display: 'none' },
  '.di': { display: 'inline' },
  '.db': { display: 'block' },
  '.dib': { display: 'inline-block' },
};

const display = ({ addUtilities }) => {
  addUtilities([displayClassNames]);
};

module.exports = {
  displayClassNames,
  display,
};
