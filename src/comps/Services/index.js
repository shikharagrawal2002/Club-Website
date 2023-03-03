import React from 'react';
import Icon1 from '../../images/microarc.svg';
import Icon2 from '../../images/codebean.svg';
import Icon3 from '../../images/microarc.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="home">
      <ServicesH1> Sneak Peek </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> MicroARC </ServicesH2>
          <ServicesP>
            3 months Intensive Project Based Learning program, where you will
            learn and gain a skill with mentors from industry solving real world
            problems.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> CodeBean</ServicesH2>
          <ServicesP>
            3 months Intensive Project Based Learning program, where you will
            learn and gain a skill with mentors from industry solving real world
            problems.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Campers D</ServicesH2>
          <ServicesP>
            3 months Intensive Project Based Learning program, where you will
            learn and gain a skill with mentors from industry solving real world
            problems.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
