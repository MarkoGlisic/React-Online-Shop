import { ListGroup } from "react-bootstrap";
import NavbarTop from '../components/NavbarTop'

const CategoryList = () => {
    return (
        <>
        <NavbarTop/>
        <ListGroup>
  <ListGroup.Item action variant="dark">Clothing</ListGroup.Item>
  <ListGroup.Item action variant="dark">Tools</ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Accessories
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Sports
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Furniture
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Pets
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Games
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Books
  </ListGroup.Item>
  <ListGroup.Item action variant="dark">
    Technology
  </ListGroup.Item>
</ListGroup>
</>
    )
}

export default CategoryList
