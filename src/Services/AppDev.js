import React, { useEffect, useRef } from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import lottie from "lottie-web";

const AppDev = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./App-dev.json"),
    });
  }, []);
  return (
    <div className="contentservices">
      <div
        className="container lottieEven lottieEvenfirst"
        ref={container}
        id="appL"
      ></div>
      <br></br>
      <Jumbotron className="container jumboEven">
        <p style={{ textAlign: "right" }} className="title2">
          App Development
        </p>

        <p style={{ textAlign: "right" }} className="content2">
          Going camping, you need to pack light, and a mobile device device is
          your best companion. We can design apps that cater to every need of
          yours. From the most user-friendly UI to an app from industry solving
          real world that actually adapts to your needs.
        </p>
      </Jumbotron>
    </div>
  );
};
export default AppDev;
