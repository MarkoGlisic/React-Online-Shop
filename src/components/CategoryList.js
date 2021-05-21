import { Link } from "react-router-dom";
import { ListGroup, Container, Image } from "react-bootstrap";
import NavbarTop from "../components/NavbarTop";
import BreadcrumbComponent from "./BreadcrumbComponent";
import categories from "../categories";

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
                variant="light"
              >
                <Container className="d-flex flex-direction-row" style={{margin:"0", padding:'0'}}> 
                {/* <div>{'img'}</div> */} 
                {/* <div>{'name'}</div> */}

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
