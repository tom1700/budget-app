import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <Routes />
            </Provider>
        );
    }
}

export default App;
