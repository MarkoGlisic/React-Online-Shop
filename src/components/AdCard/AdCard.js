import { Media } from "react-bootstrap";
import CardImage from "./CardImage";
import CardText from "./CardText";
import CardFooterInfo from "./CardFooterInfo";
import styles from '../../modules/card.module.css';

const AdCard = ({
  category,
  price,
  imgURL,
  title,
  description,
  adOwner,
  adViews,
}) => {
  return (
    <div>
      <Media
        className="shadow rounded"
        style={{ height: "150px", margin: "10px 0px 10px 5px", padding: "3px" }}
      >
        <CardImage imgURL={imgURL} />
        <Media.Body style={{ width: "80vw" }}>
          <CardText title={title} price={price} description={description} />
          <CardFooterInfo
            adOwner={adOwner}
            adViews={adViews}
            category={category}
            title={title}
          />
        </Media.Body>
      </Media>
    </div>
  );
};

export default AdCard;
