import React, { useEffect, useRef } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import lottie from "lottie-web";

const Content = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./ContentLottie.json"),
    });
  }, []);
  return (
    <div className="contentservices">
      <div
        className="container lottieEven lottieEvenlast"
        ref={container}
      ></div>
      <br></br>
      <Jumbotron className="container jumboEven">
        <p style={{ textAlign: "right" }} className="title2">
          Content Writing
        </p>

        <p style={{ textAlign: "right" }} className="content2">
          {" "}
          We can put your thoughts into words. Strike up the perfect string of
          words to put your vision and ideas out there in the world and spread
          your message of change. We provide well-researched content that sells
          and catches the reader’s eye.
        </p>
      </Jumbotron>
    </div>
  );
};
export default Content;
