import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../history';
import store from '../../redux/store';
import Layout from '../Layout/Layout';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <ConnectedRouter history={ history } >
                    <Route component={ Layout }/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
