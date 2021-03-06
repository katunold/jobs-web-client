import React from 'react';
import styled from 'styled-components';
import mq from '../../../../utils/mq';
import { LogoWithText as Logo } from '../LogoWithText';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props: any): string => props.theme.colors.blue};
  color: ${(props: any): string => props.theme.colors.white};
  padding: 5rem 1rem;
  ${mq.tablet`padding: 5rem 2rem;`}
  ${mq.laptop`padding: 5rem 5rem;`}
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1200px;

  ${mq.tablet`flex-flow: row;`}
`;


const Copyright = styled.div`
  max-width: 30em;
  ${mq.tablet`flex: 1 1 0;`}
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Copyright>
          <Logo textColor="white" logoColor="white" />
          <p>© {new Date().getFullYear()} Blossom Inc. All rights reserved.</p>
        </Copyright>
      </Content>
    </Container>
  );
};

export default Footer;
