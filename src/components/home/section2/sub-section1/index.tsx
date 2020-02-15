import React from "react";
import styled from "styled-components";
import { ReactComponent as Indexed } from "../../../../assets/svg/public/indexed.svg";
import { ReactComponent as Package } from "../../../../assets/svg/public/package.svg";
import { ReactComponent as Coverage } from "../../../../assets/svg/public/coverage.svg";
import mq from "../../../../utils/mq";

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 60%;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  align-items: center;
  width: 30%;
  height: 100%;
  
  h4 {
    font-weight: 500px;
    line-height: 1;
    letter-spacing: 0.1rem;
  }
  
  blockquote {
    font-weight: 200;
    font-size: 16px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0.5em;
  }
`;

const FullyIndexedIcon = styled(Indexed)`
  margin-top: 10vh;
  width: 20vw;
  height: 30%;
`;

const FullCoverageIcon = styled(Coverage)`
  margin-top: 10vh;
  width: 20vw;
  height: 30%;
`;

const FullPackageIcon = styled(Package)`
  margin-top: 10vh;
  width: 20vw;
  height: 30%;
`;

const SubSection1: React.FC = () => {
  return (
    <Container>
      <Content>
        <Main>
          <Card>
            <FullyIndexedIcon />
            <h4>Fully Indexed</h4>
            <blockquote>
              Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </blockquote>
          </Card>
          <Card>
            <FullCoverageIcon />
            <h4>Full Coverage</h4>
            <blockquote>
              Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </blockquote>
          </Card>
          <Card>
            <FullPackageIcon />
            <h4>Full Package</h4>
            <blockquote>
              Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
              quam id dui posuere blandit. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </blockquote>
          </Card>
        </Main>
      </Content>
    </Container>
  );
};

export default SubSection1;
