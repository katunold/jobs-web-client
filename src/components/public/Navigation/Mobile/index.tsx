import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import { MdMenu, MdClose } from 'react-icons/md';
import styled from 'styled-components';
import mq from '../../../../utils/mq';
import Public from './Public';
import { trackClick } from '../../../../utils/analyticsTracker';

const machine = Machine({
  initial: 'closed',
  states: {
    opened: {
      on: {
        TOGGLE: 'closed'
      }
    },
    closed: {
      on: {
        TOGGLE: 'opened'
      }
    }
  }
});

const Container = styled.div`
  display: block;
  position: relative;

  ${mq.tablet`display: none;`}

  button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    z-index: 10;
  }
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 200px;
  max-width: 100vw;
  height: 100%;
  background-color: ${(props: any): string => props.theme.colors.white};
  padding: 0 1em;

  > * {
    margin-top: 64px;
  }
`;

const Mobile: React.FC = () => {
  const [current, send] = useMachine(machine);
  const toggle = (): any => send({ type: 'TOGGLE' });

  return (
    <Container>
      <button
        onClick={(event): any => {
          trackClick(event, 'Navigation', 'Click - Toggle');
          send({ type: 'TOGGLE' });
        }}
      >
        {current.matches('opened') ? (
          <MdClose size={33} />
        ) : (
          <MdMenu size={33} />
        )}
      </button>

      {current.matches('opened') && (
        <>
          <Overlay onClick={toggle} />
          <Menu>
            <Public toggle={toggle} />
          </Menu>
        </>
      )}
    </Container>
  );
};

export default Mobile;
