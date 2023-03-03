import React from 'react';

import InfoSection from '../comps/InfoSection';
import { homeObjOne, homeObjTwo } from '../comps/InfoSection/Data';
// import Services from '../comps/Services';
import Carousel from '../comps/Carousel';

const Home = () => {
  return (
    <>
      {/* <Services /> */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Carousel />
    </>
  );
};
export default Home;
