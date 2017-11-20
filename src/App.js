import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddAccountForm from './components/Forms/AddAccount/AddAccount';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <AddAccountForm />
            </Provider>
        );
    }
}

export default App;
