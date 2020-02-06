import React from 'react';
import './App.css';
import GlobalStyles from "./components/GlobalStyles";
import Theme from "./components/ThemeProvider";
import {AppMachineProvider} from "./utils/context";
import Public from "./components/public";
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (

    <div className="App">
        <AppMachineProvider>
            <React.Fragment>
                <Theme>
                    <GlobalStyles />
                    <BrowserRouter>
                        <switch>
                            <Route path="/" component={Public} />
                        </switch>
                    </BrowserRouter>
                </Theme>
            </React.Fragment>
        </AppMachineProvider>
    </div>
  );
};

export default App;
