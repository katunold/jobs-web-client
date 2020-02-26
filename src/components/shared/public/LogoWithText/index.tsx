import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BlossomLogo } from '../../../../assets/svg/home/blossom-logo-blue.svg';
import { Link } from 'react-router-dom';
import { trackClick } from '../../../../utils/analyticsTracker';

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
  div.main {
    display: inline-flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
      object-fit: 'cover';
      margin-right: 0.7rem;
      margin-bottom: -0.2rem;
      left: -3px;
      path {
        fill: ${(props: any): string =>
    props.logoColor || props.theme.colors.primary.blue};
      }
    }

    p {
      color: ${(props): any =>
    props.textColor || props.theme.colors.text.black};
      letter-spacing: 0.02em;
      font-size: 1.5em;
      font-weight: 600;
    }
  }
`;

const ContainerTextLink = styled('div')<StyleProps>`
  a {
    display: inline-flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
      object-fit: 'cover';
      margin-right: 0.7rem;
      margin-bottom: -0.2rem;
      left: -3px;
      path {
        fill: ${(props: any): string =>
    props.logoColor || props.theme.colors.blue};
      }
    }

    p {
      color: ${(props): any =>
    props.textColor || props.theme.colors.text.black};
      letter-spacing: 0.02em;
      font-size: 1.5em;
      font-weight: 600;
    }
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

const LogoWithTextLink: React.FC<Props> = ({ textColor, logoColor }: Props) => {
    return (
        <ContainerTextLink textColor={textColor} logoColor={logoColor}>
            <Link to="/" onClick={trackClick}>
                <div>
                    <BlossomLogo />
                </div>
                <p>Blossom</p>
            </Link>
        </ContainerTextLink>
    );
};


const LogoWithText: React.FC<Props> = ({ textColor, logoColor }: Props) => {
    return (
        <Container textColor={textColor} logoColor={logoColor}>
            <div className='main'>
                <div>
                    <BlossomLogo />
                </div>
                <p>Blossom</p>
            </div>
        </Container>
    );
};

export { LogoWithText, LogoWithTextLink };
