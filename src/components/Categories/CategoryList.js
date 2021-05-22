import { Link } from "react-router-dom";
import { ListGroup, Container, Image } from "react-bootstrap";
import NavbarTop from "../Header/NavbarTop";
import BreadcrumbComponent from "../Header/BreadcrumbComponent";
import categories from "../../categories";

const CategoryList = () => {
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
                to={`/category/${category.name}`}
                action
                variant="dark"
              >
                <Container className="d-flex flex-direction-row" style={{margin:"0", padding:'0'}}> 
                <div style={{fontSize:'15px'}}>{category.icon}</div> 
                <div style={{margin:'0 0 0 12px'}}>{category.name}</div>

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
