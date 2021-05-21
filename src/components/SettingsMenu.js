import NavbarTop from "./NavbarTop";
import { Link } from "react-router-dom";
import BreadcrumbComponent from "./BreadcrumbComponent";
import { Col, Image, Container, Button } from "react-bootstrap";
import userImage from "../images/user/user.png";
import styles from "../modules/settings.module.css";
import {
  PersonOutline,
  MailOutline,
  LogOutOutline,
  LockOpenOutline,
} from "react-ionicons";

const SettingsMenu = () => {
  return (
    <>
      <NavbarTop />
      <BreadcrumbComponent
        path={"my-ads"}
        name={"My Ads"}
        id={"User Settings"}
      />
      <Container className={`d-flex flex-direction-column justify-content-center ${styles.wrapper}`}>
        <Col xs={8} md={6} style={{ textAlign: "center" }}>
          <Image
            style={{ width: "130px", height: "130px"}}
            src={userImage}
            roundedCircle
            className={styles.userImage}
          />

          <h3 className={styles.settingsTitle}>User Settings</h3>
          <h5 className={styles.settingsUserName}>Test 123 Settings</h5>
          <div className={styles.btnGroup}>
            <Container className="d-flex flex-direction-row">
              <Link>{<PersonOutline />} Change Username</Link>
            </Container>
            <Container className={`d-flex flex-direction-row`}>
              <Link>{<MailOutline />} Change Email</Link>
            </Container>
            <Container className={`d-flex flex-direction-row`}>
              <Link>{<LockOpenOutline />} Forgot Password</Link>
            </Container>

            <Container className="d-flex flex-direction-row">
              <Link>{<LogOutOutline color={'#d00'} />} <span className={styles.btnLogout}>Log Out</span></Link>
            </Container>
          </div>
        </Col>
      </Container>
    </>
  );
};

export default SettingsMenu;
