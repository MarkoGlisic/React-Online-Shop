import {useData} from '../../contexts/FirebaseDataContext'
import { Button, Modal, Col, Image} from "react-bootstrap"
import { useState } from 'react';
import deleteImage from '../../../src/images/confirm-delete-modal-images/delete-removebg-preview.png'


const DeleteConfirmationModal = ({title}) => {
  const {deleteAd} = useData()
  
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
      e.preventDefault()
      deleteAd(title)
      handleClose()
    }    
  
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Col className='d-flex justify-content-center mt-3'>
      <Image width={200} height={125}  src={deleteImage} roundedCircle />
    </Col>
        <Modal.Body>Do you really want to delete this record? This process cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="danger" onClick={handleShow}>
  Delete
    </Button>
    </div>
  );
};

export default DeleteConfirmationModal;
