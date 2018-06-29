import React from 'react';
import ReactDOM from 'react-dom';
import Random from 'Random';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Random />
    </Provider>,
    document.getElementById('root'));

