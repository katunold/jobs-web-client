import React from 'react';
import styled from 'styled-components';
import mq from '../../utils/mq';
import Contact from "../Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 64px;
  overflow: hidden;
  width: 100%;
  min-height: 100%;

  ${mq.tablet`margin-top: 75px;`}
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;

  ${mq.tablet`padding: 4rem 2rem;`}
`;

const Main = styled.main`
  max-width: 1200px;
  width: 100%;
`;

const Public: React.FC = () => {

    return (
        <Wrapper>
            <Navigation />
            <Content>
                <Main>
                    <Contact/>
                </Main>
            </Content>
            <Footer />
        </Wrapper>
    );
};

export default Public;
