import React from 'react';
import { Consumer } from 'store/createContext';
import Modal from '../modal';

const ModalContainer = ({ children }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal open={open} showModal={showModal} hideModal={hideModal}>
        {children}
      </Modal>
    )}
  </Consumer>
);

export default ModalContainer;
