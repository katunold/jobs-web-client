import React, { useRef } from 'react';
import machine from './machine';
import { useAppMachine } from './hook';

// TODO better typing
// This allows us to use 'send' from context without pissing off typescript
type ContextProps = [any, any, any];

const AppMachineContext = React.createContext<Partial<ContextProps>>([
  null,
  null,
  null
]);

const AppMachineProvider = (props: any): any => {
  const machineRef = useRef(machine);
  const [state, send, current] = useAppMachine(machineRef.current, {
    debug: true, // TODO disable debug mode in production
    name: 'App',
    devTools: true
  });

  return (
    <AppMachineContext.Provider value={[state, send, current]}>
      {props.children}
    </AppMachineContext.Provider>
  );
};

export { AppMachineContext, AppMachineProvider };
