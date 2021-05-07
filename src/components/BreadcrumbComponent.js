import {Breadcrumb} from 'react-bootstrap'

const BreadcrumbComponent = () => {
  return (
    <div style={{marginTop:'3rem', textAlign:'center', marginBottom:'-17px'}}>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Ads
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Categories</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
