import React from "react";
import styled from "styled-components";

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 48vh;
  width: 100%;
  background-color: ${(props: any): any => props.theme.colors.jordyBlue};
  color: ${(props): any => props.theme.colors.white};
  };
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5em;
  width: 25%;
  height: auto;
  background-color: ${(props): any => props.theme.colors.blue};
  h5 {
    margin: 10px 0;
  }
  h2 {
    margin: 0;
  }

  blockquote {
    width: 90%;
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    margin: 0;
    color: ${props => props.theme.colors.white};
  }
`;

const SubSection2: React.FC = () => (
  <Container>
    <Content>
      <Main>
        <Div>
          <h5>Countries</h5>
          <h2>100+</h2>
          <blockquote>
            Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </blockquote>
        </Div>
        <Div>
          <h5>Countries</h5>
          <h2>100+</h2>
          <blockquote>
            Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </blockquote>
        </Div>
        <Div>
          <h5>Countries</h5>
          <h2>100+</h2>
          <blockquote>
            Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Vivamus magna justo,
            lacinia eget consectetur sed, convallis at tellus.
          </blockquote>
        </Div>
      </Main>
    </Content>
  </Container>
);

export default SubSection2;
