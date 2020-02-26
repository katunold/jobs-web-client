import React from 'react';
import styled from 'styled-components';
import RequestPilot from '../../RequestPilot';

const Container = styled.ul`
  display: flex;
  flex-flow: column;

  li {
    margin: 1em 0;
    width: 100%;
    text-align: center;

    a {
      width: 100%;
    }
  }
`;

const Public: React.FC<any> = (props: any) => {
  const { toggle } = props;

  return (
    <Container>
      <li onClick={toggle}>
        <RequestPilot inverted={false}/>
      </li>
    </Container>
  );
};

export default Public;
