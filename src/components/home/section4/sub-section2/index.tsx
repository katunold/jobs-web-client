import React from "react";
import styled from "styled-components";
import mq from "../../../../utils/mq";
const Container = styled.section`
  margin: 0 !important;
  display: flex;
  justify-content: center;
  padding: 4rem;
  position: relative;
  width: 100%;
  background-color: ${(props: any): any => props.theme.colors.jordyBlue};
  color: ${(props): any => props.theme.colors.white};
  };
  ${mq.mobile`
    padding: 2rem;
  `}
  ${mq.tablet`
    padding: 4rem;
  `}
`;
const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  ${mq.mobile`
    flex-direction: column;
  `}
  ${mq.tablet`
    flex-direction: row;
  `}
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5em;
  width: 50%;
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
  ${mq.mobile`
    width: 100%;
    margin: 15px 0;
  `}
  ${mq.tablet`
    width: 30%;
    margin: 0;
  `}
`;
const SubSection2: React.FC = () => (
    <Container>
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
    </Container>
);
export default SubSection2;
