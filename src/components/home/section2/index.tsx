import React from 'react';
import styled from 'styled-components';
import mq from "../../../utils/mq";
import SubSection1 from "./sub-section1";
import SubSection2 from "./sub-section2";

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 92vh;

  ${mq.tablet`
    margin: 0 0 6em 0 !important;
  `}
`;


const Section2: React.FC = () => {
    return (
        <Container>
            <SubSection1 />
            <SubSection2 />
        </Container>
    )

};

export default Section2
