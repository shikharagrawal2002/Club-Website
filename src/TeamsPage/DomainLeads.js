import { Col, Container, Row } from 'react-bootstrap';
import media from './mediaCheck';

const CoreTeam = ({ data }) => {
  const divide = (data) => {
    map1 = data.slice(0);

    return [map1];
  };

  var [map1] = divide(data);

  return (
    <div className="DomainLeads">
      <Container fluid="true" className="mt-5">
        <Row className="align-items-center">
          <Col>
          <h1 className="titleTeam">DOMAIN LEADS</h1>
            <Row className="justify-content-center m-5 ml-5 mobileteam">
              {map1.map((data) => (
                <Col lg={3} sm={12} md={5} className="m-3 my-md-5" key={data.id}>
                  <div className="Core-Card ml-lg-5">
                    <div className="Core-Card-inner">
                      <div className="Core-Card-front">
                        <img src={data.Photo} alt="test" />
                      </div>
                    </div>
                    <div className="footer align-center">
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

export default CoreTeam;
