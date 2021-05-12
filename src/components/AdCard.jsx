import { useState } from "react"
import { Button, Card, Modal} from "react-bootstrap"
import DeleteConfirmationModal from './DeleteConfirmationModal'
import UpdateConfirmationModal from './UpdateConfirmationModal'

const AdCard = ({category, price, imgURL, title}) => {
  
  const [showUpdate, setShowUpdate] = useState(false)
  const [showDelete, setShowDelete] = useState(false)



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
        <DeleteConfirmationModal title={title}/>
        <UpdateConfirmationModal title={title}/>

      </Card.Body>
    </Card>
 
    

    
  </>
);
}

export default AdCard;
