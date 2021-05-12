import {useData} from '../contexts/FirebaseDataContext'
import { Button,  FormGroup, Form, Modal} from "react-bootstrap"
import { useState } from 'react';


const UpdateConfirmationModal = ({title}) => {
    const [show, setShow] = useState(false);
    const { updateAd} = useData()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (e) => {
        e.preventDefault()
        updateAd(title, 'test')
      }
    
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please confirm your action</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <FormGroup>
          <Form.Control type="text" placeholder="Normal text" />
          <Form.Control type="text" placeholder="Normal text" />
          <Form.Control type="text" placeholder="Normal text" />
              </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={handleShow}>
    Update
    </Button>
      </div>
    );
  };
  
  export default UpdateConfirmationModal;
  