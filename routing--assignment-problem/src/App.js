import React, {Component} from 'react';

import LandingPage from './containers/LandingPage/LandingPage'
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <LandingPage />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
