import { Media, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  PersonOutline,
  PricetagOutline,
  EyeOutline,
} from "react-ionicons";

const AdCardList = ({
  category,
  price,
  imgURL,
  title,
  description,
  adOwner,
  adViews
}) => {
  return (
    <div>
      <Media
        className="shadow bg-white rounded"
        style={{ margin: "10px 0px 10px 5px", padding:'3px'}}
      >
        <img width={64} height={64} src={imgURL} alt="img" />
        <Media.Body style={{ width: "80vw" }}>
          <Container
            className="d-flex flex-row"
            style={{ position: "relative" }}
          >
            <Row>
              <h5 style={{ marginLeft: "3px" }}>{title}</h5>
              <p style={{ position: "absolute", right: "5px" }}>
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
              marginLeft: "3px",
            }}
          >
            {description}
          </p>
          <Container className="d-flex flex-row">
            <Container
              className="flex-column d-flex"
              style={{ marginLeft: "-6.5rem", verticalAlign: "middle  " }}
            >
              <Container className="d-flex flex-row">
                <PersonOutline
                  color={"#00000"}
                  height="13px"
                  width="13px"
                  style={{ marginRight: "3px", marginLeft: "2px" }}
                />
                {adOwner}
              </Container>
              
              <Container className="d-flex flex-row">
                <PricetagOutline
                  color={"#00000"}
                  height="13px"
                  width="13px"
                  style={{ marginRight: "3px", marginLeft: "2px" }}
                />
                <Link to={`/category/${category}`} style={{ color: "inherit" }}>
                  {category}
                </Link>
                <EyeOutline
                  color={"#00000"}
                  height="13px"
                  width="13px"
                  style={{ marginRight: "2px", marginLeft: "15px" }}
                />
                
                  {`Views: ${adViews}`}
              </Container>
              
            </Container>
            <div
              className="justify-content-end"
              style={{ padding: "0", margin: "0" }}
            >
              <Button as={Link} to={`/${title}`} variant="secondary">
                See more
              </Button>
            </div>
          </Container>
        </Media.Body>
      </Media>
    </div>
  );
};

export default AdCardList;
