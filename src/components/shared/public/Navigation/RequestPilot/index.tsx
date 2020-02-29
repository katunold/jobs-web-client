import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { trackClick } from '../../../../../utils/analyticsTracker';

interface Inversion {
    inverted: boolean;
    large: boolean;
}

let inverted: boolean;
let large: boolean;

const Container = styled.button`
  display: block;
  color: ${(props: any): string => inverted ? props.theme.colors.primary: props.theme.colors.white };
  padding: 0.5em 1em;
  background-color: ${(props: any): string => inverted ? props.theme.colors.white: props.theme.colors.blue};
  text-align: center;
  font-size: ${(props: any): string => large ? '1.5rem': '1rem'};
  border-radius: 0px 5px 5px 5px;
  text-decoration: none;

  &:hover {
    color: ${(props: any): string => inverted ? props.theme.colors.blue : props.theme.colors.white};
    opacity: 0.8;
  }
`;

const RequestPilot: React.FC<Inversion> = (props) => {
    inverted = props.inverted;
    large = props.inverted;
  return (
    <Container as={Link} to="/contact" onClick={trackClick}>
      Learn More
    </Container>
  );
};

export default RequestPilot;
