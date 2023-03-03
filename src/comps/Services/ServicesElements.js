import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 20vh;
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    margin-top: 20vh;
  }
`;

export const ServicesWrapper = styled.div`
  ${"" /* max-width: 25vw; */}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 5vw;
  padding: 0 0px;
  ${"" /* padding: 0 5vw; */} @media screen and
    (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 558px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #6b6b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: auto;
  padding: 30px;
  padding-top: 0px;
  padding-left: 10px;
  padding-right: 10px;
  width: 20vw;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    ${"" /* margin: 0 30px; */}
    width: 80vw;
  }
`;

export const ServicesIcon = styled.img`
  height: 260px;
  width: 260px;
  margin-bottom: 1px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 50px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;
