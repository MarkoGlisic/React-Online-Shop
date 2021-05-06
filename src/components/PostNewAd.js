import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Container, Form, Col, Button } from "react-bootstrap";
import Navbar from "./NavbarTop.jsx";
import { useData } from "../contexts/FirebaseDataContext";

const PostNewAd = () => {
  const history = useHistory();
  const { setNewAd } = useData();
  const adTitleRef = useRef();
  const adDescriptionRef = useRef();
  const adImageUrlRef = useRef();
  const adCityRef = useRef();
  const adPriceRef = useRef();
  const adCategoryRef = useRef();
  const { currentUserEmail, currentUserName } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewAd(
      adTitleRef.current.value,
      adDescriptionRef.current.value,
      adImageUrlRef.current.value,
      adCityRef.current.value,
      adPriceRef.current.value,
      adCategoryRef.current.value,
      currentUserName
    );
    history.push("/");
  };

  console.log(currentUserEmail);
  console.log(currentUserName);

  return (
    <div>
      <Navbar />

      <Container style={{ marginTop: "5rem" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                ref={adTitleRef}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                ref={adPriceRef}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Your post description"
              ref={adDescriptionRef}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              placeholder="Enter your image url"
              ref={adImageUrlRef}
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control ref={adCityRef} required />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" ref={adCategoryRef} required>
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
          </Form.Row>

          <Button variant="primary" type="submit" block>
            Post
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default PostNewAd;
