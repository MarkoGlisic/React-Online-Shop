import { PersonOutline, PricetagOutline, EyeOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardButton from "./CardButton";

const CardFooterInfo = ({ adOwner, adViews, category, title }) => {
  return (
    <>
      <Container className="d-flex flex-row">
        <Container
          className="flex-column d-flex"
          style={{
            marginLeft: "-6.5rem",
            verticalAlign: "middle  ",
            marginTop: "20px",
          }}
        >
          <Container className="d-flex flex-row">
            <PersonOutline
              height="13px"
              width="13px"
              color="#989898"
              style={{ marginRight: "3px", marginLeft: "2px" }}
            />
            <div
              style={{
                color: "#989898",
                fontSize: "14px",
                marginTop: "3.5px",
              }}
            >
              {adOwner}
            </div>
          </Container>

          <Container className="d-flex flex-row">
            <PricetagOutline
              height="13px"
              width="13px"
              color="#989898"
              style={{ marginRight: "3px", marginLeft: "2px" }}
            />
            <Link to={`/category/${category}`} style={{ color: "inherit" }}>
              <div
                style={{
                  color: "#989898",
                  fontSize: "14px",
                  marginTop: "3px",
                }}
              >
                {category}
              </div>
            </Link>
            <EyeOutline
              height="13px"
              color="#989898"
              width="13px"
              style={{ marginRight: "2px", marginLeft: "15px" }}
            />
            <div
              style={{
                color: "#989898",
                fontSize: "14px",
                marginTop: "3.5px",
              }}
            >
              {`Views: ${adViews}`}
            </div>
          </Container>
        </Container>
        <CardButton title={title} />
      </Container>
    </>
  );
};

export default CardFooterInfo;
