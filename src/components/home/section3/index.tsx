import React from 'react';
import styled from 'styled-components';
import mq from "../../../utils/mq";
import SubSection1 from "./sub-section1";
import SubSection2 from "./sub-section2";
import SubSection3 from "./sub-section3";

const Wrapper = styled.section`
  position: relative;
  height: 150vh;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  ${mq.tablet`top: 0;`}
`;

const Section3: React.FC = () => (
    <Wrapper>
        <SubSection1/>
        <SubSection2/>
        <SubSection3/>
    </Wrapper>
);

export default Section3;
