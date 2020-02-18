import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mq from '../../../../../utils/mq';
import RequestPilot from '../RequestPilot';
import { trackClick } from '../../../../../utils/analyticsTracker';

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
          <Link className="link" to="/contact" onClick={trackClick}>
            Contact us
          </Link>
        </li>
        <li>
          <RequestPilot />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Desktop;
