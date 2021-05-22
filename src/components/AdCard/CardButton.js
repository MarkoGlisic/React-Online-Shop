import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from '../../modules/card.module.css';

const CardButton = ({ title }) => {
  return (
    <div
      className="justify-content-end"
      style={{ padding: "0", margin: "25px -10px 0 0 " }}
    >
      <Button
        as={Link}
        to={`/${title}`}
        variant="light"
        style={{ color: "#3a3b3c" }}
      >
        See more
      </Button>
    </div>
  );
};

export default CardButton;
