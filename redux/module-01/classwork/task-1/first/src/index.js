import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import {Provider} from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import ToDo from './components/ToDo/ToDo';



ReactDOM.render(

    <Provider store ={store}>
        <ToDo/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();




// ReactDOM.render(
//     <Provider store ={store}>
//         <Counter/>
//     </Provider>, document.getElementById('root'));
// registerServiceWorker();
