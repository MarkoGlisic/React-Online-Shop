import {useData} from '../contexts/FirebaseDataContext'
import { Button, Modal, Col, Image} from "react-bootstrap"
import { useState } from 'react';


const DeleteConfirmationModal = ({title}) => {
  const {deleteAd} = useData()
  
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
      e.preventDefault()
      deleteAd(title)
    }    
  
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
        <Modal.Body>Do you really want to delete this record? This process cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
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
