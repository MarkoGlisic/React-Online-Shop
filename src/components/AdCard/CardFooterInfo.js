import { PersonOutline, PricetagOutline, EyeOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardButton from "./CardButton";
import styles from "../../modules/card.module.css";

const CardFooterInfo = ({ adOwner, adViews, category, title }) => {
  return (
    <>
      <Container className="d-flex flex-row">
        <Container className={`flex-column d-flex ${styles.cardContainer} `}>
          <Container className="d-flex flex-row">
            <PersonOutline
              height="13px"
              width="13px"
              color="#989898"
              className={styles.iconMargin}
            />
            <div className={styles.cardFooterTextLeft}>{adOwner}</div>
          </Container>

          <Container className="d-flex flex-row">
            <PricetagOutline
              height="13px"
              width="13px"
              color="#989898"
              className={styles.iconMargin}
            />
            <Link to={`/category/${category}`} className={styles.cardLink}>
              <div className={styles.cardFooterTextLeft}>{category}</div>
            </Link>
            <EyeOutline
              height="13px"
              color="#989898"
              width="13px"
              className={styles.iconEye}
            />
            <div className={styles.cardFooterTextLeft}>
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
