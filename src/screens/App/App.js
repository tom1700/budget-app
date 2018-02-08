import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from '../../history';
import store from '../../redux/store';
import { initDatabase } from '../../redux/database/actions';
import Layout from '../Layout/AppLayout';
import dataBase from '../../services/database';
import './App.css';

class App extends Component {
    async componentDidMount() {
        const docs = await Promise.all(['accounts', 'transactions', 'categories'].map(async (id) => {
            try {
                const doc = await dataBase.get(id);
                return doc;
            } catch (err) {
                console.log(err);
                return { collection: [] };
            }
        }));

        store.dispatch(initDatabase({
            accounts: docs[0].collection,
            transactions: docs[1].collection,
            categories: docs[2].collection
        }));
    }

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
