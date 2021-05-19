import NavbarTop from './NavbarTop'
import BreadcrumbComponent from './BreadcrumbComponent'
import {Col, Image} from 'react-bootstrap'

const SettingsMenu = () => {
  return (
      <>
        <NavbarTop/>
        <BreadcrumbComponent/>
        
        <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
      <Col>
        <h2>User Settings</h2>
        <h4>Test 123 Settings</h4>
      </Col>
    </Col>
      </>
  );
};

export default SettingsMenu;
