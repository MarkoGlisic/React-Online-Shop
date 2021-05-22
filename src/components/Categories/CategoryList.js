import { Link } from "react-router-dom";
import { ListGroup, Container, Image } from "react-bootstrap";
import NavbarTop from "../Header/NavbarTop";
import BreadcrumbComponent from "../Header/BreadcrumbComponent";
import categories from "../../categories";
import styles from "../../modules/categories.module.css";

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
                <Container
                  className={`d-flex flex-direction-row ${styles.categoryContainer}`}
                >
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div className={styles.categoryName}>{category.name}</div>
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
