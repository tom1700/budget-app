import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducers from './reducers';
import middlewares from './middlewares';

const testing = process.env.NODE_ENV === 'test';
const devTools = (window.navigator.userAgent.includes('Chrome') ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    :
    compose);
const storeEnhancers = testing ? applyMiddleware(...middlewares) : compose(
    applyMiddleware(...middlewares),
    devTools
);

const store = createStore(
    combinedReducers,
    storeEnhancers
);

export default store;