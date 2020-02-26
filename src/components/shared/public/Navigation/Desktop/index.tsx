import React from 'react';
import styled from 'styled-components';
import mq from '../../../../../utils/mq';
import RequestPilot from '../RequestPilot';

const Wrapper = styled.nav`
  height: 100%;
  display: none;

  > ul {
    display: flex;
    align-items: center;
    height: 100%;

    > li {
      margin-left: 2em;
      text-decoration: none;

      &:first-of-type {
        margin-right: auto;
      }
    }
  }

  ${mq.tablet`display: block;`}
`;

const Desktop: React.FC = () => {

  return (
    <Wrapper>
      <ul>
        <li>
          <RequestPilot inverted={false}/>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Desktop;
