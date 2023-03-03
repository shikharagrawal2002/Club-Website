import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WebDev from "./WebDev";
import AppDev from "./AppDev";
import Content from "./Content";
import Creative from "./Creative";
import Marketing from "./Marketing";
import "./Services.css";

const Header = () => {
  return (
    <div>
      <p className="header heading sm-12">Services we provide</p>
      <WebDev />
      <AppDev />
      <Creative />
      <Content />
      <Marketing />
    </div>
  );
};
export default Header;
