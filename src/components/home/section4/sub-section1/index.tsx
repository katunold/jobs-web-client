import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Mongo } from '../../../../assets/svg/public/mongodb-logo.svg';
import { ReactComponent as Bain } from '../../../../assets/svg/home/bain-ventures-logo.svg';
import { ReactComponent as Mars } from '../../../../assets/svg/home/mars-logo.svg';

const Container = styled.section`
  margin: 0 !important;
  position: relative;
  // height: 22vh;
  width: 100%;
  background-color: ${(props): any => props.theme.colors.white};
  color: ${(props): any => props.theme.colors.black};
  };
`;

const Content = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  // height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  // height: 100%;
  h2 {
    margin-top: 45px;
  }
`;

const Div = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
   // height: auto;
   margin: 1vh 0px;
`;

const MongoDBIcon = styled(Mongo)`
  width: 35%;
  margin: 1vh 0 3vh;
`;

const BainIcon = styled(Bain)`
  width: 25%;
  margin: 1vh 0 3vh;
`;

const MarsIcon = styled(Mars)`
  width: 25%;
  margin: 1vh 0 3vh;
`;

const SubSection1: React.FC = () => (
    <Container>
        <Content>
            <Main>
                <h2>The CIP of Leading Revenue & Analytics Teams</h2>
                <Div>
                    <BainIcon />
                    <MongoDBIcon />
                    <MarsIcon />
                </Div>
            </Main>
        </Content>
    </Container>
);

export default SubSection1;
