const { outlinedLabelTheme } = require('./theme/outlined-label-theme');

const outlinedLabelPlugin = ({ addComponents, e }) => {
  const outlinedLabelBase = {
    '.outlined-label-wrapper': {
      position: 'relative',
      '& > input': {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '1rem',
        margin: 'auto',
      },
    },
    '.outlined-label': {
      fontFamily: `'Inter var', sans-serif`,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '1rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '.375rem',
    },
  };

  const [lightOutlinedLabelModes, darkOutlinedLabelModes] = Object.keys(
    outlinedLabelTheme
  ).map((colorMode) => ({
    [`.${e(`${colorMode}:outlined-label`)}`]: {
      ...outlinedLabelTheme[colorMode].base,
      '&:hover': outlinedLabelTheme[colorMode].hover,
      'input:checked ~ &, input:focus ~ &':
        outlinedLabelTheme[colorMode].active,
    },
    [`.${e(`${colorMode}:outlined-label-disabled`)}`]: {
      ...outlinedLabelTheme[colorMode].disabled,
    },
    [`.${e(`${colorMode}:outlined-label-valid`)}`]: {
      ...outlinedLabelTheme[colorMode].valid,
      'input:checked ~ &, input:focus ~ &': outlinedLabelTheme[colorMode].valid,
    },
    [`.${e(`${colorMode}:outlined-label-invalid`)}`]: {
      ...outlinedLabelTheme[colorMode].invalid,
      'input:checked ~ &, input:focus ~ &':
        outlinedLabelTheme[colorMode].invalid,
    },
  }));

  addComponents({
    ...outlinedLabelBase,
    ...lightOutlinedLabelModes,
    ...darkOutlinedLabelModes,
  });
};

module.exports = outlinedLabelPlugin;
