import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center !important;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props): string => props.theme.colors.whiteTwo};
  > div {
    border: 8px solid #e9e9e9;
    border-radius: 50%;
    border-top: 8px solid ${(props): string => props.theme.colors.primary};
    width: 60px;
    height: 60px;
    animation: ${rotate} 1s linear infinite;
  }
`;

const LoadingOverlay: React.FC = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default LoadingOverlay;
