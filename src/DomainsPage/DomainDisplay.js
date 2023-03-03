import { Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie-player";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Technical from "./lotties/Technical.json";
import Marketing from "./lotties/Marketing.json";
import Content from "./lotties/Content.json";
import Sponsorship from "./lotties/Sponsorship.json";
import Creative from "./lotties/Creative.json";

const Domain = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="domain">
      <Container fluid>
        <Row className="row">
          <Col className="AfterText   ">
            <h1 className="text-responsive" data-aos="">
              Technical Domain
            </h1>
            <p data-aos="" className="text-left">
              Without them, we would still be in the stone age, contemplating
              about what-ifs. Technical domain transmogrifies ideas into real
              life and produces brain-racking breakthroughs; the technical
              domain is the epicentre of amelioration of the camp-a kaleidoscope
              to the future.
              <br></br> Our Sub-Domains are:-<br></br>{" "}
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>AI / ML</li>
                <li>Competitive Programming</li>
              </ul>
            </p>
          </Col>
          <Col>
            <div className="lottieContainer" data-aos="">
              <Lottie loop play animationData={Technical} className="lottie" />
            </div>
          </Col>
        </Row>
        <Row className="row-2">
          <Col>
            <div data-aos="">
              <Lottie loop play animationData={Content} className="lottie" />
            </div>
          </Col>
          <Col className="BeforeText ">
            <div className="left">
              <h1 className="text-responsive" data-aos="">
                Content Domain
              </h1>
              <p data-aos="" className="text-right">
                A string of words can inspire to break a mountain to pave a path
                for blossoming the inner creative side. The content domain
                believes in unleashing authentic ideas and writing them in a way
                that incentivizes them.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col className="AfterText   ">
            <h1 className="text-responsive" data-aos="">
              Creative Domain
            </h1>
            <p data-aos="" className="text-left">
              A mind so creative that the rainbow above the camp channels a
              prolific thinker. From GFX/VFX to 3D modelling, the creative
              domain specializes in shaping the website, posts and posters as
              eye candy; without them, it would be monotonous.
            </p>
          </Col>
          <Col>
            <div data-aos="" className="lottiecontainer">
              <Lottie loop play animationData={Creative} className="lottie" />
            </div>
          </Col>
        </Row>
        <Row className="row-2">
          <Col data-aos="" sm-xs={12}>
            <Lottie loop play animationData={Sponsorship} className="lottie" />
          </Col>
          <Col className="BeforeText  " sm-xs={12}>
            <h1 className="text-responsive" data-aos="">
              Sponsorship Domain
            </h1>
            <p data-aos="" className="text-right text-wrap">
              The events we hold need sponsors to give our participants the
              rewards they deserve<br></br>The sponsorship team reaches out to
              the people we most resonate with and bringa smile to our
              participant's faces just like roasted marshmallows do.
            </p>
          </Col>
        </Row>
        <Row className="row">
          <Col className="AfterText   ">
            <h5 className="text-responsive" data-aos="">
              Marketing Domain
            </h5>
            <p data-aos="" className="text-left">
              A group of people with nothing but peaks of enthusiasm and
              positivity, the marketing domain brings in people with like minds
              who share the same creative spark and technical competency. They
              captivate the best of the best and make our camp party bigger.
            </p>
          </Col>
          <Col>
            <div data-aos="">
              <Lottie
                loop
                play
                height={500}
                animationData={Marketing}
                className="lottie"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Domain;
