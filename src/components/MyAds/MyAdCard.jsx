import { Card, Container} from "react-bootstrap"
import DeleteConfirmationModal from './DeleteConfirmationModal'
import UpdateConfirmationModal from './UpdateConfirmationModal'

const MyAdCard = ({category, price, imgURL, title, description, city}) => {
  return (
    <>
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
        <Container className='d-flex flex-row justify-content-around'>
          <UpdateConfirmationModal title={title} category={category} imgURL={imgURL} description={description} city={city} price={price}/>    
          <DeleteConfirmationModal title={title}/>
        </Container>
      </Card.Body>
    </Card>    
  </>
);
}

export default MyAdCard;
