import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import NavbarTop from "../components/NavbarTop";
import BreadcrumbComponent from "./BreadcrumbComponent"

const CategoryList = () => {
  const [identifier, setIdentifier] = useState("");

  const categories = [
    "Clothing",
    "Tools",
    "Accessories",
    "Sports",
    "Furniture",
    "Pets",
    "Games",
    "Books",
    "Technology",
  ];
  const handleIdentifier = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <NavbarTop/>
      <BreadcrumbComponent path={'my-ads'} name={'My Ads'} id={"Categories"} />
      <ListGroup>
        {categories.map((category) => {
          return (
            <div key={category}>
              <ListGroup.Item
                as={Link}
                to={`/category/${category}`}
                action
                variant="dark"
              >
                {category}
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CategoryList;
