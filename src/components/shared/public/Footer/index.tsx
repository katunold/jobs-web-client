import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mq from '../../../../utils/mq';
import LogoWithText from '../LogoWithText';
import { trackClick } from '../../../../utils/analyticsTracker';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props: any): string => props.theme.colors.copy};
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

  ${mq.tablet`flex-flow: row-reverse;`}
`;

const Links = styled.div`
  display: flex;

  ${mq.tablet`
    justify-content: center;
    flex: 1 1 0;
  `}
`;

const LinkList = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 4em;

  &:first-child {
    margin-right: 4em;
  }

  > p {
    font-weight: 700;
  }

  a {
    color: ${(props: any): string => props.theme.colors.white};
  }

  ${mq.tablet`margin-bottom: 0;`}
`;

const Copyright = styled.div`
  max-width: 30em;
  ${mq.tablet`flex: 1 1 0;`}
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Links>
          <LinkList>
            <p>About</p>
            <ul>
              <li>
                <Link to="/" onClick={trackClick}>
                  <p>Home</p>
                </Link>
                {/*<Link to="/about" onClick={trackClick}>
                  <p>About Us</p>
                </Link>
                <Link to="/careers" onClick={trackClick}>
                  <p>Careers</p>
                </Link>*/}
              </li>
            </ul>
          </LinkList>

          <LinkList>
            <p>Support</p>
            <ul>
              <li>
                <Link to="/contact" onClick={trackClick}>
                  <p>Request Pilot</p>
                </Link>
                <Link to="/tos" onClick={trackClick}>
                  <p>Terms Of Service</p>
                </Link>
                <Link to="/privacy" onClick={trackClick}>
                  <p>Privacy Policy</p>
                </Link>
                <Link to="/sitemap" onClick={trackClick}>
                  <p>Site Map</p>
                </Link>
              </li>
            </ul>
          </LinkList>
        </Links>
        <Copyright>
          <LogoWithText textColor="white" logoColor="white" />
          <p>
            Blossom is a venture capital deal sourcing intelligence platform.
          </p>
          <p>© {new Date().getFullYear()} Blossom Inc. All rights reserved.</p>
        </Copyright>
      </Content>
    </Container>
  );
};

export default Footer;
