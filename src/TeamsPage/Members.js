import { Col, Container, Row } from "react-bootstrap";
import media from "./mediaCheck";

const Members = ({ data }) => {
  return (
    <Container fluid="true" className="mt-5 mb-5">
      <Row>
        
        <Col>
        <h1 className="titleTeam mt-lg-5">MEMBERS</h1>
          <Row className="mt-5 mt-lg-5 justify-content-center">
            {data.map((data) => (
              <Col lg={2} className="m-3 justify-content-center " key={data.id}>
                <div className="Member-Card ml-sm-5">
                  <div className="Member-Card-inner">
                    <img src={data.Photo} alt="" />
                    <div className="Member-Card-desc">
                      <div className="footer">
                        <h1>{data.Name}</h1>
                        <p className="">{data.Domain}</p>
                        {media(data)}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Members;
