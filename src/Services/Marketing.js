import React, { useEffect, useRef } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import lottie from "lottie-web";

const Marketing = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./MarketingLottie.json"),
    });
  }, []);
  return (
    <div className="contentservices">
      <div className="container lottieOdd" ref={container}></div>
      <br></br>
      <br></br>
      <Jumbotron className="container jumboOdd">
        <p style={{ textAlign: "left" }} className="title">
          Marketing
        </p>

        <p style={{ textAlign: "left" }} className="content">
          All you need is a good idea, to market your product is our
          responsibility. We know how to reach out to the perfect target
          audience and show what you have to offer to the people who need it the
          most.
        </p>
      </Jumbotron>
    </div>
  );
};
export default Marketing;
