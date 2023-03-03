import React from "react";

import image from "../../images/landing.png";
import {
  HeroContainer,
  HeroBg,
  PicBg,
  HeroContent,
  HeroB,
  Logo,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <PicBg src={image} alt="herolanding" />
      </HeroBg>
      <HeroContent>
        <Logo
          src="https://cdn.discordapp.com/attachments/695495864390778890/848812285715152896/guvi_logo_4.png"
          alt="GCC logo"
          style={{ height: "25rem" }}
        />{" "}
        <HeroB>Your Camping Guide for the most efficient code</HeroB>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
