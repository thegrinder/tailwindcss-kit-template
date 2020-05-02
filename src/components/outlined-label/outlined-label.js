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
      boxShadow: '0 0 0 3px transparent',
      transition: '0.2s ease-in-out',
      transitionProperty: 'border, box-shadow',
    },
  };

  const [lightOutlinedLabelModes, darkOutlinedLabelModes] = Object.keys(
    outlinedLabelTheme
  ).map((colorMode) => ({
    [`.${e(`${colorMode}:outlined-label`)}`]: {
      ...outlinedLabelTheme[colorMode].normal.base,
      'input:focus ~ &': outlinedLabelTheme[colorMode].normal.active,
      'input:checked ~ &': outlinedLabelTheme[colorMode].normal.checked,
    },
    [`.${e(`${colorMode}:outlined-label-disabled`)}`]: outlinedLabelTheme[
      colorMode
    ].disabled,
    [`.${e(`${colorMode}:outlined-label-valid`)}`]: {
      ...outlinedLabelTheme[colorMode].valid.base,
      'input:checked ~ &': outlinedLabelTheme[colorMode].valid.base,
      'input:focus ~ &': outlinedLabelTheme[colorMode].valid.active,
    },
    [`.${e(`${colorMode}:outlined-label-invalid`)}`]: {
      ...outlinedLabelTheme[colorMode].invalid.base,
      'input:checked ~ &': outlinedLabelTheme[colorMode].invalid.base,
      'input:focus ~ &': outlinedLabelTheme[colorMode].invalid.active,
    },
  }));

  addComponents({
    ...outlinedLabelBase,
    ...lightOutlinedLabelModes,
    ...darkOutlinedLabelModes,
  });
};

module.exports = outlinedLabelPlugin;
