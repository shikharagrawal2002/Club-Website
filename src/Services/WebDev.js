import React, { useEffect, useRef } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import lottie from "lottie-web";

const WebDev = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Web-dev.json"),
    });
  }, []);
  return (
    <div className="contentservices">
      <div className="container lottieOdd" ref={container}></div>
      <br></br>
      <br></br>
      <Jumbotron className="container jumboOdd">
        <p style={{ textAlign: "left" }} className="title">
          Web Development
        </p>

        <p style={{ textAlign: "left" }} className="content">
          All you want in a website, we can provide. Not only will it appeal to
          the eye,but it will also be as easy to use as making marshmallows,and
          will have all the features to provide the user with the smoothest
          experience. The amazing functionality our websites will provide will
          turn your visitors into customers.
        </p>
      </Jumbotron>
    </div>
  );
};
export default WebDev;
