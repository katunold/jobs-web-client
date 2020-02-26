import React from 'react';
import './App.css';
import GlobalStyles from "./components/shared/GlobalStyles";
import Theme from "./components/shared/ThemeProvider";
import {AppMachineProvider} from "./utils/context";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/Contact";

const App = () => {
    return (

        <div className="App">
            <AppMachineProvider>
                <React.Fragment>
                    <Theme>
                        <GlobalStyles />
                        <BrowserRouter>
                            <Route exact path="/" component={Home}/>
                            <Route path="/contact" component={Contact}/>
                        </BrowserRouter>
                    </Theme>
                </React.Fragment>
            </AppMachineProvider>
        </div>
    );
};

export default App;
