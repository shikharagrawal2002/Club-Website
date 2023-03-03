import { Col, Container, Row } from 'react-bootstrap';
import media from './mediaCheck';

const AssociateLeads = ({ data }) => {
  return (
    <div className="AssociateLeads">
      <Container fluid="true" className="mt-5">
        <Row className="align-items-center justify-content-center">
          
          <Col>
          <h1 className="titleTeam">ASSOCIATE LEADS</h1>
            <Row className="justify-content-center mobileteam my-5 ml-4">
              {data.map((data) => (
                <Col lg={2} sm={12} md={2} className="m-5" key={data.id}>
                  <div className="Associate-Card my-2">
                    <div className="Associate-Card-inner">
                      <div className="Associate-Card-front">
                        <img src={data.Photo} alt="test" />
                      </div>
                    </div>
                    <div className="footer ">
                      <h1>{data.Name}</h1>
                      <p>{data.Domain}</p>
                      {media(data)}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssociateLeads;
