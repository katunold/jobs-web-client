import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/svg/home/blossom-logo-blue.svg';
import { Link } from 'react-router-dom';
import { trackClick } from '../../../utils/analyticsTracker';

interface Props {
  textColor?: string;
  logoColor?: string;
}

interface StyleProps {
  textColor?: string | undefined;
  logoColor?: string | undefined;
  theme?: any;
}

const Container = styled('div')<StyleProps>`
  a {
    display: inline-flex;
    align-items: center;

    svg {
      width: 28px;
      height: auto;
      margin-right: 0.75em;

      ${(props): any =>
        props.logoColor &&
        `
        path {
          fill: ${(props: any): string => props.theme.colors.primary}
        }
      `}
    }

    p {
      color: ${(props): any =>
        props.textColor ? props.textColor : props.theme.colors.copy};
      font-weight: 700;
      letter-spacing: 0.02em;
      font-size: 1.25em;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const LogoWithText: React.FC<Props> = ({ textColor, logoColor }: Props) => {
  return (
    <Container textColor={textColor} logoColor={logoColor}>
      <Link to="/" onClick={trackClick}>
        <Logo />
        <p>Blossom</p>
      </Link>
    </Container>
  );
};

export default LogoWithText;
