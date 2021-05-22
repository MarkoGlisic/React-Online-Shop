import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "../../modules/settings.module.css";
import { Container } from "react-bootstrap";
import {
  PersonOutline,
  MailOutline,
  LogOutOutline,
  LockOpenOutline,
} from "react-ionicons";

const SettingsOptions = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = (e) => {
      e.preventDefault()
      logout()
      history.push('/')
  }

  return (
    <div className={styles.btnGroup}>
      <Container className="d-flex flex-direction-row">
        <Link>{<PersonOutline />} Change Username</Link>
      </Container>
      <Container className={`d-flex flex-direction-row`}>
        <Link>{<MailOutline />} Change Email</Link>
      </Container>
      <Container className={`d-flex flex-direction-row`}>
        <Link to='/forgot-password'>{<LockOpenOutline />} Forgot Password</Link>
      </Container>

      <Container className="d-flex flex-direction-row">
        <Link onClick={handleLogout}> 
          {<LogOutOutline color={"#d00"} />}{" "}
          <span className={styles.btnLogout}>Log Out</span>
        </Link>
      </Container>
    </div>
  );
};

export default SettingsOptions;
