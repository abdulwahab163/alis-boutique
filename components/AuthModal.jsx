import React from 'react';
import { Modal } from 'react-bootstrap';

const AuthModal = ({ show, onHide, children, heading }) => {
  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton className='border-0'>
        <h3 className='mb-0'>{heading}</h3>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default AuthModal;
