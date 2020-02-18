import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { trackClick } from '../../../../../utils/analyticsTracker';

const Container = styled.button`
  display: block;
  color: ${(props: any): string => props.theme.colors.white};
  padding: 0.5em 1em;
  background-color: ${(props: any): string => props.theme.colors.primary};
  text-align: center;
  font-size: 1rem;
  border-radius: 0px 5px 5px 5px;
  text-decoration: none;

  &:hover {
    color: ${(props: any): string => props.theme.colors.white};
    opacity: 0.8;
  }
`;

const RequestPilot: React.FC = () => {
  return (
    <Container as={Link} to="/contact" onClick={trackClick}>
      Request Pilot
    </Container>
  );
};

export default RequestPilot;
