import React, { useEffect, useRef } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import lottie from "lottie-web";

const Creative = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Creative3.json"),
    });
  }, []);
  return (
    <div className="contentservices">
      <div
        className="container lottieOdd lottieEvenlast"
        ref={container}
        id="creativeL"
      ></div>
      <br></br>
      <Jumbotron className="container jumboOdd">
        <p style={{ textAlign: "left" }} className="title">
          Creative Support
        </p>

        <p style={{ textAlign: "left" }} className="content">
          A picture speaks a thousand words and if you can think it, we can make
          it come into being. We are like the Picassos of the technological age,
          with illustrations that will satisfy your aesthetic hunger, and
          showcase your product and its plus points in the best light possible,
          quite literally.
        </p>
      </Jumbotron>
    </div>
  );
};
export default Creative;
