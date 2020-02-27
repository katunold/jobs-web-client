import React from "react";
import styled from "styled-components";
import { ReactComponent as HomepageImage } from "../../../assets/svg/public/blossom-jobs-hero-banner-01.svg";
import mq from "../../../utils/mq";
import RequestPlan from "./request-plan";
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 75%;
  max-width: 1200px;
  margin-top: -70px;
  ${mq.mobile`
    width: 90%;
    flex-direction: column-reverse;
  `}
  ${mq.tablet`
    flex-direction: row;
  `}
  ${mq.laptopSmall`
    max-width: 1200px;
  `}
`;
const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 50%;
  h1 {
    font-size: 58;
    padding-top: 2em;
    margin-bottom: 0.5em;
    line-height: 48px;
  }
  span {
    font-size: 30;
    margin-bottom: 0.5em;
    font-weight: normal;
    line-height: 1;
  }
  #lastspan {
    margin-bottom: 5vh;
  }
  ${mq.mobile`
    width: 100%;
    align-items: center;
    h1 {
      padding-top: 0.5em;
    }
  `}
  ${mq.tablet`
    width: 50%;
    align-items: flex-start;
  `}
`;
const Wrapper = styled.section`
  position: relative;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any): any => props.theme.colors.jordyBlue};
`;
const HomepageSVG = styled(HomepageImage)`
  width: 50%;
  height: 40vh;
  ${mq.mobile`
    width: 100%;
  `}
  ${mq.tablet`
    width: 50%;
  `}
`;
const Section1: React.FC = () => (
    <Wrapper>
      <Container>
        <Div>
          <h1>Job postings data.</h1>
          <span>Comprehensive. Realtime. No middlemen</span>
          <span id="lastspan">Built for sales and analytics teams</span>
          <RequestPlan />
        </Div>
        <HomepageSVG />
      </Container>
    </Wrapper>
);
export default Section1;
