import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadcrumbComponent = ({ path, id, name }) => {
  return (
    <div
      style={{ marginTop: "3rem", textAlign: "center", marginBottom: "-17px" }}
    >
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/${path}`}>{name}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{id}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
