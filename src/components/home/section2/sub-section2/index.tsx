import React from 'react';
import styled from 'styled-components';
import mq from '../../../../utils/mq';
import RequestPlan from '../../section1/request-plan';

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 40%;
  background-color: ${(props: any): any => props.theme.colors.blue};

`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 3rem 1rem;

  ${mq.tablet`padding: 4rem 2rem;`}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 100%;

  h4 {
    font-weight: 500px;
    letter-spacing: auto;
    font-size: 20px;
    margin-top: 0px;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.colors.white};
  }

  blockquote {
    width: 30vw;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    color: ${props => props.theme.colors.white};
  }
`;

const SubSection2: React.FC = () => {
  return (
    <Container>
      <Content>
        <Main>
          <h4>The only intelligence platform for job postings</h4>
          <RequestPlan />
          <blockquote>
            Analyze millions of data-points on Job openings, titles,
            descriptions, sectors, skill sets, technology stacks and more
          </blockquote>
        </Main>
      </Content>
    </Container>
  );
};

export default SubSection2;
