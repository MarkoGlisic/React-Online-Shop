import { Image } from "react-bootstrap";
import userImage from "../../images/user/user.png";
import styles from "../../modules/settings.module.css";

const SettingsHeader = ({ userName }) => {
  return (
    <>
      <Image
        src={userImage}
        roundedCircle
        className={styles.userImage}
      />
      <h3 className={styles.settingsTitle}>User Settings</h3>
      <h5 className={styles.settingsUserName}>Test 123 Settings</h5>
    </>
  );
};

export default SettingsHeader;
