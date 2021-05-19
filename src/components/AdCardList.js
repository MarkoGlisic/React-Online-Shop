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
        className="shadow rounded"
        style={{ height:"150px", margin: "10px 0px 10px 5px", padding:'3px'}}
      >
        <img width={64} height={64} src={imgURL} alt="img" />
        <Media.Body style={{ width: "80vw" }}>
          <Container
            className="d-flex flex-row"
            style={{ position: "relative" }}
          >
            <Row>
              <h5 style={{ marginLeft: "8px",color:"#333333" }}>{title}</h5>
              <p style={{ position: "absolute", right: "5px", color:"#333333" }}>
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
              color: "#909090" 
            }}
          >
            {description}
          </p>
          <Container className="d-flex flex-row">
            <Container
              className="flex-column d-flex"
              style={{ marginLeft: "-6.5rem", verticalAlign: "middle  ",marginTop:'20px'}}
            >
              <Container className="d-flex flex-row">
                <PersonOutline
                  height="13px"
                  width="13px"
                  color="#989898"
                  style={{ marginRight: "3px", marginLeft: "2px" }}
                />
                <div style={{color:"#989898", fontSize:'14px', marginTop:"3.5px"}}>
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
                  <div style={{color:"#989898", fontSize:'14px', marginTop:"3px"}}>

                  {category}
                  </div>
                </Link>
                <EyeOutline
                  height="13px"
                  color='#989898'
                  width="13px"
                  style={{ marginRight: "2px", marginLeft: "15px" }}
                />
                <div style={{color:"#989898", fontSize:'14px', marginTop:"3.5px"}}>

                  {`Views: ${adViews}`}
                </div>
              </Container>
              
            </Container>
            <div
              className="justify-content-end"
              style={{ padding: "0", margin: "25px -10px 0 0 "}}
            >
              <Button as={Link} to={`/${title}`} variant="light" style={{color:'#3a3b3c'}}>
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
