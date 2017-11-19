import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import middlewares from './middlewares';

const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares)
);

export default store;