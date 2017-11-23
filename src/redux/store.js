import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import middlewares from './middlewares';

const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;