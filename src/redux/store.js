import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import middlewares from './middlewares';

const testing = process.env.NODE_ENV === 'test';
const storeEnhancers = testing ? applyMiddleware(...middlewares) : compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    combinedReducers,
    storeEnhancers
);

export default store;