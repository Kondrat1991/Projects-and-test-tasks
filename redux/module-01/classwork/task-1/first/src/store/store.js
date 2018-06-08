import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const refer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers,refer,applyMiddleware(logger));

export default store;

