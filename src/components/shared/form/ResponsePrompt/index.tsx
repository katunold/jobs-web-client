import React from 'react';
import styled from 'styled-components';
import check from 'check-types';

const Container = styled('div')<StyleProps>`
  color: ${(props): string => (props.type === 'error' ? 'red' : 'green')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  text-align: center;
  top: -16px;
`;

interface Props {
  prompt: {
    type: string;
    message: any;
  };
}

interface StyleProps {
  type: string;
}

const ResponsePrompt: React.FC<Props> = (props: Props) => {
  return (
    <Container type={props.prompt.type}>
      {check.function(props.prompt.message) ? (
        props.prompt.message()
      ) : (
        <p>{props.prompt.message}</p>
      )}
    </Container>
  );
};

export default ResponsePrompt;
