import React from "react";
import styled from "styled-components";
import { ReactComponent as HomepageImage } from "../../../assets/svg/public/blossom-jobs-hero-banner-01.svg";
import mq from "../../../utils/mq";
import RequestPlan from "./request-plan";

const Container = styled.section`
  margin: 0 !important;
  display: flex;
  flex-direction: row;

  ${mq.tablet`
    margin: 0 0 6em 0 !important;
  `}
`;

const Div = styled.div`
  position: relative;
  height: 80vh;
  display: flex;
  flex-flow: column;
  text-align: center;
  
  h1 {
    font-weight: 500;
    padding-top: 2em;
    margin-bottom: 0.5em;
    line-height: 1.25;
  }

  span {
    font-weight: 200;
    margin-bottom: 0.5em;
    line-height: 1;
    letter-spacing: 0.2rem;
  }

  #lastspan {
    margin-bottom: 4vh;
  }

  ${mq.tablet`
    justify-content: top;   
    padding: 1em 0;
    text-align: left;
    align-items: flex-start;

    h1 {
      margin-top: 0;
    }
  `}
`;

const Wrapper = styled.section`
  position: relative;
  height: 92vh;
  ${mq.tablet`top: 0;`}
  background-color: ${(props: any): any => props.theme.colors.jordyBlue};
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10rem 1rem;
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  height: 100%;
`;

const HomepageSVG = styled(HomepageImage)`
  margin: 0;
  width: 40vw;
  height: 40vh;
`;

const ImageDiv = styled.div`
  display: flex;
  padding-top: 3.5vh;
  padding-left: 8vw;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Section1: React.FC = () => (
  <Wrapper>
    <Content>
      <Main>
        <Container>
          <Div>
            <h1>Job postings data.</h1>
            <span>Comprehensive. Realtime. No middlemen</span>
            <span id="lastspan">Built for sales and analytics teams</span>
            <RequestPlan />
          </Div>
          <ImageDiv>
            <HomepageSVG />
          </ImageDiv>
        </Container>
      </Main>
    </Content>
  </Wrapper>
);

export default Section1;
