/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import { useEffect, useContext } from 'react';
import { AppMachineContext } from './context';
import { path } from 'xstate/lib/utils';

interface Config {
  title?: string;
  pathname?: string;
}

const statechart = {
  id: 'loading',
  initial: 'loading',
  context: {},
  states: {
    loading: {
      invoke: {
        id: 'Requesting',
        src: 'request',
        onDone: {
          actions: 'handleResponseData',
          target: 'loaded'
        },
        onError: {
          target: 'error',
          actions: 'handleResponseError'
        }
      }
    },
    loaded: {
      onEnter: (ctx: any): any => {
        console.log(ctx);
      },
      on: {
        REQUEST: 'loading'
      }
    },
    error: {}
  }
};

export const useLoader = (actions?: any, services?: any, guards?: any): any => {
  const machine = Machine(statechart, { actions, services, guards });
  const [current] = useMachine(machine);

  return [current];
};

const titleMap: any = {
  '/about': 'About',
  '/careers': 'Careers',
  '/contact': 'Contact',
  '/availability': 'Support And Availability',
  '/help': 'Help',
  '/feedback': 'Feedback',
  '/forgot/password': 'Forgot Password',
  '/forgot/username': 'Forgot Username',
  '/forgot/email': 'Forgot Email',
  '/tos': 'Terms Of Service',
  '/enterprise-tos': 'Enterprise Terms Of Service',
  '/privacy': 'Privacy Policy',
  '/signin': 'Sign In',
  '/email-login': 'Email Login',
  '/sitemap': 'Site Map',
  '/signup': 'Sign Up',
  '/email-confirmation': 'Reset Password'
};

export const useTitle = (config: Config): void => {
  const [_, send] = useContext(AppMachineContext);
  const { title, pathname } = config;

  useEffect(() => {
    send({
      type: 'UPDATE_TITLE',
      payload: {
        title
      }
    });

    document.title = title ? `${title} | Blossom` : 'Blossom';
  }, [title, send]);

  useEffect(() => {
    if (pathname && !pathname.includes('console')) {
      if (pathname === '/') {
        document.title = 'Blossom';
      } else {
        document.title = `${titleMap[pathname]} | Blossom`;
      }
    }
  }, [pathname]);
};
