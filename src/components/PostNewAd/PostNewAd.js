import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/FirebaseDataContext";
import { Container, Form, Col, Button } from "react-bootstrap";
import Navbar from "../Header/NavbarTop.jsx";
import BreadcrumbComponent from "../Header/BreadcrumbComponent";
import styles from "../../modules/postNewAd.module.css";

const PostNewAd = () => {
  const history = useHistory();
  const { setNewAd } = useData();
  const adTitleRef = useRef();
  const adDescriptionRef = useRef();
  const adImageUrlRef = useRef();
  const adCityRef = useRef();
  const adPriceRef = useRef();
  const adCategoryRef = useRef();
  const { currentUserName } = useAuth();

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

  return (
    <div>
      <Navbar />
      <BreadcrumbComponent path={"my-ads"} name={"My Ads"} id={"Post New"} />
      <h2 className={styles.newAdTitle}>Post New Ad</h2>
      <Container className={styles.newAdContainer}>
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
