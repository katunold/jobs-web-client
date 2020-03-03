import React from "react";
import styled from "styled-components";
import { ReactComponent as Indexed } from "../../../../assets/svg/public/fully-indexed-01.svg";
import { ReactComponent as Package } from "../../../../assets/svg/public/full-package.svg";
import { ReactComponent as Coverage } from "../../../../assets/svg/public/full-coverage-01.svg";
import mq from "../../../../utils/mq";
const Container = styled.section`
  margin: 0 !important;
  position: relative;
  height: 60%;
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
  padding: 6% 0;
  width: 1200px;
  height: 100%;
  ${mq.mobile`
    flex-direction: column;
  `}
  ${mq.mobileBig`
    flex-direction: row;
  `}
`;
const Card = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  align-items: center;
  width: 100%;
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
    margin-bottom: 3em;
  }
`;
const FullyIndexedIcon = styled(Indexed)`
  margin-top: 5vh;
  width: 50%;
`;
const FullCoverageIcon = styled(Coverage)`
  margin-top: 5vh;
  width: 50%;
`;
const FullPackageIcon = styled(Package)`
  margin-top: 5vh;
  width: 50%;
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
                Search across the entire text of the posting, with keyword
                matching. Lorem epsom opsum epsom opsum epsom opsum.
              </blockquote>
            </Card>
            <Card>
              <FullPackageIcon />
              <h4>Full Package</h4>
              <blockquote>
                Whether it's raw data you're after or some help with analytics,
                we've got you covered.
              </blockquote>
            </Card>
            <Card>
              <FullCoverageIcon />
              <h4>Full Coverage</h4>
              <blockquote>
                All companies from fortune 500s to startups. All over the world.
                Lorem epsom opsum epsom opsum epsom opsum.
              </blockquote>
            </Card>
          </Main>
        </Content>
      </Container>
  );
};
export default SubSection1;
