const { outlinedLabelTheme } = require('./theme/outlined-label-theme');
const { createBoxShadow } = require('../../helpers');

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
      boxShadow: createBoxShadow('transparent'),
      transition: '0.2s ease-in-out',
      transitionProperty: 'border, box-shadow',
    },
  };

  const [lightOutlinedLabelModes, darkOutlinedLabelModes] = Object.keys(
    outlinedLabelTheme
  ).map((colorMode) => {
    const { normal, valid, invalid } = outlinedLabelTheme[colorMode];
    return {
      [`.${e(`${colorMode}:outlined-label-normal`)}`]: {
        ...normal.base,
        'input:focus ~ &': normal.active,
        'input:checked ~ &': normal.checked,
      },
      [`.${e(`${colorMode}:outlined-label-disabled`)}`]: normal.disabled,
      [`.${e(`${colorMode}:outlined-label-valid`)}`]: {
        ...valid.base,
        'input:checked ~ &': valid.base,
        'input:focus ~ &': valid.active,
      },
      [`.${e(`${colorMode}:outlined-label-invalid`)}`]: {
        ...invalid.base,
        'input:checked ~ &': invalid.base,
        'input:focus ~ &': invalid.active,
      },
    };
  });

  addComponents({
    ...outlinedLabelBase,
    ...lightOutlinedLabelModes,
    ...darkOutlinedLabelModes,
  });
};

module.exports = outlinedLabelPlugin;
