import React from 'react';
import styled from 'styled-components';
import mq from '../../utils/mq';
import Section1 from "./section1";
import Navigation from "../shared/public/Navigation";
import Footer from "../shared/public/Footer";
import Section2 from "./section2";
import Section3 from "./section3";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 64px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;

  ${mq.tablet`margin-top: 75px;`}
`;

const Home: React.FC = () => (
  <Wrapper>
      <Navigation />
      <Section1/>
      <Section2 />
      <Section3 />
      <Footer />
  </Wrapper>
);

export default Home;
