import React from 'react';
import styled from 'styled-components';
import mq from "../../../utils/mq";
import SubSection1 from "./sub-section1";
import SubSection2 from "./sub-section2";

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  ${mq.tablet`top: 0;`}
`;

const Section4: React.FC = () => (
    <Wrapper>
        <SubSection1/>
        <SubSection2/>
    </Wrapper>
);

export default Section4;


