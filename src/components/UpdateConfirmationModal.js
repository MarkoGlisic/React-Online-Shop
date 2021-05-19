import { useData } from "../contexts/FirebaseDataContext";
import { Button, InputGroup, FormControl, Modal, Form } from "react-bootstrap";
import { useRef, useState } from "react";

const UpdateConfirmationModal = ({
  category,
  price,
  title,
  description,
  city,
  imgURL
}) => {
  const [show, setShow] = useState(false);
  const { updateAd } = useData();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateAd(title, newTitleRef.current.value, newDescriptionRef.current.value, newPriceRef.current.value, newCityRef.current.value, newCategoryRef.current.value,newURLRef.current.value)
    handleClose()
  };


  const newTitleRef = useRef();
  const newDescriptionRef = useRef();
  const newPriceRef = useRef();
  const newCityRef = useRef();
  const newCategoryRef = useRef();
  const newURLRef = useRef();


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter new values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl ref={newTitleRef} defaultValue={title} />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={city} ref={newCityRef} />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl defaultValue={imgURL} ref={newURLRef}/>
            </InputGroup>

            <label htmlFor="amount">Price</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                defaultValue={price}
                ref={newPriceRef}
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" defaultValue={category} ref={newCategoryRef} required>
                <option>Clothing</option>
                <option>Tools</option>
                <option>Sports</option>
                <option>Accessories</option>
                <option>Furniture</option>
                <option>Pets</option>
                <option>Games</option>
                <option>Books</option>
                <option>Technology</option>
                <option>Vehicles</option>
              </Form.Control>
            </Form.Group>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                defaultValue={description}
                ref={newDescriptionRef}
              />
            </InputGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
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
