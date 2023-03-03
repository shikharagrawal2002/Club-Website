import React from 'react';
import Domain from './DomainDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Domain.css';

const Domains = () => {
  return (
    <div className="domains">
      <div>
        {/* <Container fluid className="nav">
          <Row></Row>
        </Container> */}
        <h3 className="heading sm-12">Our Domains</h3>
        <div className="contents">
          <Domain />
        </div>
      </div>
    </div>
  );
};

export default Domains;
