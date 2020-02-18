// https://github.com/coodoo/xstate-examples/blob/master/crud-v1-services/src/utils/useMyHooks.js
/* eslint-disable */
/* tslint:disable */

import { useState, useRef, useEffect } from 'react';
import { interpret } from 'xstate';

export const useAppMachine = (
  machine: any,
  { debug = false, name = '', interpreterOptions = {}, devTools = false }
) => {
  const [, force] = useState(0);
  const machineRef = useRef(null);
  const serviceRef = useRef();

  if (machineRef.current !== machine) {
    machineRef.current = machine;
    serviceRef.current = interpret(
      //@ts-ignore
      machineRef.current,
      interpreterOptions
    ).onTransition((state: any) => {
      if (state.event.type === 'xstate.init') {
        // debugger	//
        return;
      }

      if (state.changed === false && debug === true) {
        console.error(
          `\n\n💣💣💣 [UNHANDLED EVENT][useMachine]💣💣💣\nEvent=`,
          state.event,

          '\nState=',
          state.value,
          state,

          '\nContext=',
          state.context,
          '\n\n'
        );

        return;
      }

      if (debug === true) {
        console.group(`%c[useMachine ${name}]`, 'color: darkblue');
        dumpState(state.value);
        console.log('ctx=', state.context);
        console.log('evt=', state.event);
        console.log('\n');
        console.groupEnd();
      }

      // re-render if the state changed
      force(x => x + 1);
    });

    // start immediately, as it's in the constructor
    //@ts-ignore
    serviceRef.current.start();
  }

  // didMount
  useEffect(() => {
    return () => {
      console.log('useMachine unload');
      //@ts-ignore
      serviceRef.current.stop();
    };
  }, []);

  return [
    //@ts-ignore
    serviceRef.current.state,
    //@ts-ignore
    serviceRef.current.send,
    serviceRef.current
  ];
};

// service is Interpreter, already starte
export const useServiceEx = (
  service: {
    onTransition: (arg0: (state: any) => void) => void;
    state: any;
    send: any;
  } | null,
  { debug = false, name = '' }: any
) => {
  const lastRef = useRef(null);

  // eslint-disable-next-line
  const [_, force] = useState(0);

  if (lastRef.current !== service) {
    //@ts-ignore
    lastRef.current = service;

    service.onTransition((state: any) => {
      // unhandled events
      if (state.changed === false && debug === true) {
        console.error(
          `\n\n💣💣💣 [UNHANDLED EVENT][useService]💣💣💣\nEvent=`,
          state.event,

          '\nState=',
          state.value,
          state,

          '\nContext=',
          state.context,
          '\n\n'
        );

        return;
      }

      if (debug === true) {
        console.group(`%c[useService ${name}]`, 'color: green');
        console.log(state.value);
        console.log(`ctx=`, state.context);
        console.log('evt=', state.event);
        console.log('\n');
        console.groupEnd();
      }

      force(x => x + 1);
    });
  }
  //@ts-ignore
  return [service.state, service.send, service];
};

// helper
export const dumpState = (item: any, depth = 1) => {
  // if (depth == 1) console.log('\n')

  const MAX_DEPTH = 100;
  depth = depth || 0;
  let isString = typeof item === 'string';
  let isDeep = depth > MAX_DEPTH;

  if (isString || isDeep) {
    console.log(item);
    return;
  }

  for (var key in item) {
    console.group(key);
    dumpState(item[key], depth + 1);
    console.groupEnd();
  }
};
