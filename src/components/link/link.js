const { colorModes } = require('../../colors');
const { linkTypes } = require('./theme/linkTheme');

const buttonPlugin = ({ addComponents }) => {
  const linkBaseStyle = {
    '.link': {
      fontFamily: `'Inter var', sans-serif`,
      backgroundColor: 'transparent',
      border: 'none',
      overflow: 'visible',
      display: 'inline-block',
      verticalAlign: 'middle',
      outline: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      marginBottom: '0',
      '&:hover': {
        outline: 'none',
        textDecoration: 'underline',
      },
    },
  };

  const [lightModeLinkTypes, darkModeLinkTypes] = colorModes.map((colorMode) =>
    Object.keys(linkTypes[colorMode]).reduce(
      (acc, linkType) => ({
        ...acc,
        [`.${colorMode}-mode .link-type-${linkType}`]: {
          ...linkTypes[colorMode][linkType].normal,
          '&:hover': linkTypes[colorMode][linkType].hover,
        },
      }),
      {}
    )
  );

  addComponents({
    ...linkBaseStyle,
    ...lightModeLinkTypes,
    ...darkModeLinkTypes,
  });
};

module.exports = buttonPlugin;
