import { Container, Row } from "react-bootstrap";
import styles from '../../modules/card.module.css'

const CardText = ({ title, price, description }) => {
  return (
    <>
      <Container className={`d-flex flex-row ${styles.cardTextContainer}`}>
        <Row>
          <h5 className={styles.cardTextTitle}>{title}</h5>
          <p className={styles.cardTextPrice}>
            Price: {price}$
          </p>
        </Row>
      </Container>
      <p
        className={styles.cardTextDescription}
      >
        {description}
      </p>
    </>
  );
};

export default CardText;
