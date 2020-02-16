import React from "react";
import styled from "styled-components";
import { ReactComponent as LandingPage } from "../../../../assets/svg/public/landing_page.svg";

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 50vh;
  width: 100%;
  background-color: ${(props): any => props.theme.colors.linkWater};
  color: ${(props): any => props.theme.colors.white};
  };
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;

  h1 {
    font-weight: 500px;
    color: ${(props): any => props.theme.colors.darkGrey};
  }

  h4 {
    font-weight: 500px;
    line-height: 1;
    letter-spacing: 0.1rem;
    color: ${(props): any => props.theme.colors.black};
    margin-top: 0px;
  }

  blockquote {
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0.5em;
    color: ${(props): any => props.theme.colors.black};
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const LandingPageImage = styled(LandingPage)`
  width: 40vw;
  height: 40vh;
`;

const SubSection1: React.FC = () => (
  <Container>
    <Content>
      <Main>
        <Section>
          <TextSection>
            <h1>#1</h1>
            <h4>Lorem ipsum dolor sit amet</h4>
            <blockquote>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
              nibh. Praesent sapien massa, convallis a pellentesque nec, egestas
              non nisi.
            </blockquote>
          </TextSection>
          <ImageSection>
            <LandingPageImage />
          </ImageSection>
        </Section>
        Sub-section 1
      </Main>
    </Content>
  </Container>
);

export default SubSection1;
