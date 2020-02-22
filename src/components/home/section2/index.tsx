import React from 'react';
import styled from 'styled-components';
import mq from "../../../utils/mq";
import SubSection1 from "./sub-section1";
import SubSection2 from "./sub-section2";
const Container = styled.section`
  position: relative;
  height: 92vh;
  ${mq.mobile`
    height: 100%;
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
