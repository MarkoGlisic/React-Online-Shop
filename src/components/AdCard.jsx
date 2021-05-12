import { Button, Card} from "react-bootstrap"
import { Link } from 'react-router-dom'

const AdCard = ({category, price, imgURL, title, canDelete, canEdit,seeMoreIsVisible}) => {
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
        
        {seeMoreIsVisible && <Button as={Link} to={`/${title}`} variant="primary">See more</Button>}
       {canEdit && <Button as={Link} to={`/${title}`} variant="warning">Edit</Button>}
       {canDelete && <Button as={Link} to={`/${title}`} variant="danger">Delete</Button>}
      </Card.Body>
    </Card>
  );
};

export default AdCard;
