import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  position: relative;
  color: ${(props: any): any => props.theme.colors.red};
  font-size: 0.875em;
  margin: 0;
  text-align: right;
  padding-top: 0.6em;
  top: -16px;
`;

const Error: React.FC = (props: any) => {
  return <Container>{props.children}</Container>;
};

export default Error;
