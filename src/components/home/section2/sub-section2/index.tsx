import React from 'react';
import styled from 'styled-components';
import mq from "../../../../utils/mq";

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 40%;
  background-color: ${(props: any): any =>
    props.theme.colors.blue};

  ${mq.tablet`
    margin: 0 0 6em 0 !important;
  `}
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


const SubSection2: React.FC = () => {

    return (
        <Container>
            <Content>
                <Main>
                    Sub-section 2
                </Main>
            </Content>
        </Container>
    )

};

export default SubSection2;
