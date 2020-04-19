const { mapNestedThemeToClasses } = require('../../helpers');
const { modalTheme } = require('./theme/modal-theme');

const customPlugin = ({ addComponents, e }) => {
  const modalBase = {
    '.modal': {
      outline: 'none',
      position: 'absolute',
      backgroundColor: 'hsl(0, 0%, 100%)',
      transition: 'opacity .3s',
      opacity: '0',
    },
  };

  const defaultModal = {
    '.modal-default': {
      borderRadius: '.5rem',
      maxWidth: '20rem',
      width: '100%',
    },
  };

  const screenModal = {
    '.modal-screen': {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
  };

  const overlayBase = {
    '.overlay': {
      transition: 'opacity .3s',
      position: 'fixed',
      zIndex: '10',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      opacity: '0',
    },
  };

  const defaultOverlay = {
    '.overlay-default': {
      background: 'hsla(0, 0%, 0%, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const fullScreenOverlay = {
    '.overlay-screen': {
      background: 'hsl(0, 0%, 100%)',
    },
  };

  const modalStates = {
    '.modal-opened, .overlay-opened': {
      opacity: '1',
    },
    '.modal-closed, .overlay-closed': {
      opacity: '0',
    },
  };

  const modalModes = mapNestedThemeToClasses(
    modalTheme,
    (colorMode, variant, element) => ({
      [`.${e(`${colorMode}:${element}-${variant}`)}`]: modalTheme[colorMode][
        variant
      ][element],
    })
  );

  addComponents({
    ...modalBase,
    ...defaultModal,
    ...screenModal,
    ...overlayBase,
    ...defaultOverlay,
    ...fullScreenOverlay,
    ...modalStates,
    ...modalModes,
  });
};

module.exports = customPlugin;
