import { Button, Card} from "react-bootstrap"
import { Link } from 'react-router-dom'

const AdCard = ({category, price, imgURL, title}) => {
  return (

    <Card style={{ width: "18rem", margin:'80px 18px -20px 40px'}}>
      <Card.Img variant="top" src={imgURL}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Category: ${category}`}
        </Card.Text>
        <Card.Text>
          {`Price: ${price}$`}
        </Card.Text>
        
        <Button as={Link} to={`/${title}`} variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};

export default AdCard;
