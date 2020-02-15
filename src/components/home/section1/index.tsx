import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomepageImage } from '../../../assets/svg/public/analytics.svg';
import mq from '../../../utils/mq';
import RequestPlan from './request-plan';

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
  align-items: center;

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
    letter-spacing: .2rem;
  }
  
  #lastspan {
   margin-bottom: 4vh;
  }

  ${mq.tablet`
    justify-content: top;   
    padding: 6em 0;
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
  background-color: ${(props: any): any =>
    props.theme.colors.jordyBlue};
`;


const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;

  ${mq.tablet`padding: 4rem 2rem;`}
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  height: 100%;
`;

const HomepageSVG = styled(HomepageImage)`
  margin-left: 10vw;
  margin-top: 10vh;
  width: 60vw;
  height: 60vh;
`;


const Section1: React.FC = () => (
  <Wrapper>
      <Content>
          <Main>
              <Container>
                  <Div>
                      <h1>
                          Job postings data.
                      </h1>
                      <span>
                          Comprehensive. Realtime. No middlemen
                      </span>
                      <span id="lastspan">
                          Built for sales and analytics teams
                      </span>
                      <RequestPlan/>
                  </Div>
                  <HomepageSVG />
              </Container>
          </Main>
      </Content>
  </Wrapper>
);

export default Section1;
