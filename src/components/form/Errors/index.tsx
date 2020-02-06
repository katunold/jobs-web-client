import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${(props: any): any => props.theme.colors.red} p {
    margin: 0;
    margin-bottom: 0.5em;
  }
`;

const Errors: React.FC<any> = ({ touched, errors }: any) => {
  const touchedFields = Object.keys(touched);
  if (!touchedFields) {
    return null;
  }

  return (
    <Container>
      {touchedFields.map((field, i) => {
        return errors[field] && <p key={`error-${i}`}>{errors[field]}</p>;
      })}
    </Container>
  );
};

export default Errors;
