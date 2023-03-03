import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  ${"" /* align-items: center; */}
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    height: 100vh;

    overflow: hidden;
  }
`;

export const PicBg = styled.img`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 480px) {
    height: 100vh;
    width: 320vw;
    transform: translateX(-390px);
  }
  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;
export const Logo = styled.img`
  @media screen and (max-width: 480px) {
    // max-height: 25rem;
    margin-top: 25vh;
    max-height: 15rem;
    max-width: 22.4rem;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroB = styled.div`
  width: 50vw;
  height: 0px;
  padding-top: 80px;
  font-style: normal;
  font-weight: 900;
  font-size: 2.1rem;
  text-align: center;

  letter-spacing: 0.14em;

  color: #141414;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    width: 70vw;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
