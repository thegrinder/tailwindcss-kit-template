const customPlugin = ({ addComponents }) => {
  const modalBase = {
    '.modal-default, .modal-full-screen': {
      outline: 'none',
      position: 'absolute',
      backgroundColor: '#fff',
      borderRadius: '.5rem',
      transition: 'opacity .3s',
      opacity: '0',
    },
  };

  const defaultModal = {
    '.modal-default': {
      maxWidth: '20rem',
      width: '100%',
    },
  };

  const fullScreenModal = {
    '.modal-full-screen': {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
    },
  };

  const overlayBase = {
    '.modal-overlay-default, .modal-overlay-full-screen': {
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
    '.modal-overlay-default': {
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const fullScreenOverlay = {
    '.modal-overlay-full-screen': {
      background: '#fff',
    },
  };

  const modalState = {
    '.modal-opened, .modal-overlay-opened': {
      opacity: '1',
    },
    '.modal-closed, .modal-overlay-closed': {
      opacity: '0',
    },
  };

  addComponents({
    ...modalBase,
    ...defaultModal,
    ...fullScreenModal,
    ...overlayBase,
    ...defaultOverlay,
    ...fullScreenOverlay,
    ...modalState,
  });
};

module.exports = customPlugin;
