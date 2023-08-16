import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface DeleteModelProps {
  show: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

const DeleteModel: React.FC<DeleteModelProps> = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size='lg'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this contact(s)?
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='danger' onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModel;
