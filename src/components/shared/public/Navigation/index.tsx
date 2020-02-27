import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mq from '../../../../utils/mq';
import { LogoWithTextLink as Logo } from '../LogoWithText';
import Desktop from './Desktop';
import Mobile from './Mobile';
import {theme} from "../../ThemeProvider";

interface WrapperProps {
  isTop: boolean;
}

const Wrapper = styled('div')<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  transition: all 0.25s linear;
  padding: 0.01px;

  background-color: ${(props: any): any => props.theme.colors.catSkillWhite};
  border-bottom: 1px solid transparent;
  box-shadow: none;

  ${(props): any =>
    !props.isTop &&
    `
    background-color: ${(props: any): string => props.theme.colors.white};
    border-bottom: 1px solid ${(props: any): string =>
      props.theme.colors.border}};
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.07), 0 2px 6px 2px rgba(60,64,67,.07);
  `}

  ${mq.tablet`height: 75px;`}
`;

const Content = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  ${mq.tablet`margin: 0 2rem;`}
  ${mq.laptop`margin: 0 5rem;`}
`;

const Navigation: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = (): any => {
      const scrollCheck = window.scrollY === 0;
      if (scrollCheck !== isTop) {
        setIsTop(scrollCheck);
      }
    };

    document.addEventListener('scroll', onScroll);

    return (): any => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [isTop, setIsTop]);

  return (
    <Wrapper isTop={isTop}>
      <Content>
        <Logo textColor={theme.colors.blue}
        />
        <Desktop />
        <Mobile />
      </Content>
    </Wrapper>
  );
};

export default Navigation;
