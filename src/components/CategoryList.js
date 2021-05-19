import { Link } from "react-router-dom";
import { ListGroup, Container, Image } from "react-bootstrap";
import NavbarTop from "../components/NavbarTop";
import BreadcrumbComponent from "./BreadcrumbComponent";
import categories from "../categories";
const CategoryList = () => {
  console.log(categories);

  return (
    <>
      <NavbarTop />
      <BreadcrumbComponent path={"my-ads"} name={"My Ads"} id={"Categories"} />
      <ListGroup>
        {categories.map((category) => {
          return (
            <div key={category}>
              <ListGroup.Item
                as={Link}
                to={`/category/${category.category}`}
                action
                variant="dark"
              >
                <Container className="d-flex flex-direction-row" style={{margin:"0", padding:'0'}}> 
                <div style={{margin:' 0px 10px 0px -10px',fontSize:'15px'}}>{category.img}</div> 
                <div>{category.category}</div>

                </Container>
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CategoryList;
