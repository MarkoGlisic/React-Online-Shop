import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from '../../modules/card.module.css';

const CardButton = ({ title }) => {
  return (
    <div
      className={`justify-content-end ${styles.cardButtonContainer}`}
    >
      <Button
        as={Link}
        to={`/${title}`}
        variant="light"
        className={styles.cardButton}
      >
        See more
      </Button>
    </div>
  );
};

export default CardButton;
