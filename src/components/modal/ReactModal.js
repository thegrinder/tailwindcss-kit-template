import React from 'react';
import ReactModal from 'react-modal';
import { useColorMode } from 'theme-ui';

const getModalClassNames = (colorMode) => ({
  default: {
    className: {
      base: `modal modal-default ${colorMode}:modal-default`,
      beforeClose: 'modal-closed',
      afterOpen: 'modal-opened',
    },
    overlayClassName: {
      base: `overlay overlay-default ${colorMode}:overlay-default`,
      beforeClose: 'overlay-closed',
      afterOpen: 'overlay-opened',
    },
  },
  screen: {
    className: {
      base: `modal modal-screen ${colorMode}:modal-screen`,
      beforeClose: 'modal-closed',
      afterOpen: 'modal-opened',
    },
    overlayClassName: {
      base: `overlay overlay-screen ${colorMode}:overlay-screen`,
      beforeClose: 'overlay-closed',
      afterOpen: 'overlay-opened',
    },
  },
});

const Modal = ({ type, isOpen, onRequestClose, children }) => {
  const [colorMode] = useColorMode();
  const modalClassNames = getModalClassNames(colorMode);
  return (
    <ReactModal
      closeTimeoutMS={300}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={modalClassNames[type].className}
      overlayClassName={modalClassNames[type].overlayClassName}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
