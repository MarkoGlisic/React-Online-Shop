import { Col, Container } from "react-bootstrap";
import NavbarTop from "./NavbarTop";
import BreadcrumbComponent from "./BreadcrumbComponent";
import SettingsHeader from "./SettingsHeader";
import SettingsOptions from "./SettingsOptions";
import styles from "../modules/settings.module.css";

const SettingsMenu = () => {
  return (
    <>
      <NavbarTop />
      <BreadcrumbComponent
        path={"my-ads"}
        name={"My Ads"}
        id={"User Settings"}
      />
      <Container
        className={`d-flex flex-direction-column justify-content-center ${styles.wrapper}`}
      >
        <Col xs={8} md={6} className={styles.columnStyles}>
          <SettingsHeader />
          <SettingsOptions />
        </Col>
      </Container>
    </>
  );
};

export default SettingsMenu;
