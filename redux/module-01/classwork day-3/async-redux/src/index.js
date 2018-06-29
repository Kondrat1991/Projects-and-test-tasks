import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
    <Counter />
    </Provider>,
    document.getElementById('root'));