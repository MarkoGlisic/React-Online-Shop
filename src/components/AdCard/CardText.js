import { Container, Row } from "react-bootstrap";

const CardText = ({ title, price, description }) => {
  return (
    <>
      <Container className="d-flex flex-row" style={{ position: "relative" }}>
        <Row>
          <h5 style={{ marginLeft: "8px", color: "#333333" }}>{title}</h5>
          <p style={{ position: "absolute", right: "5px", color: "#333333" }}>
            Price: {price}$
          </p>
        </Row>
      </Container>
      <p
        style={{
          overflow: "hidden",
          maxWidth: "75ch",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginLeft: "8px",
          color: "#909090",
        }}
      >
        {description}
      </p>
    </>
  );
};

export default CardText;
