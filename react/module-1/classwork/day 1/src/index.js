//by component
//import React, {Component} from 'react';

//import {aboutMe} from './about-me';
//by function
// import React from 'react';


//with import
import React from 'react';


import ReactDOM from 'react-dom';

import ClassAndFunction from './ClassAndFunction';


import './index.css';
//import App from './App';
//import {aboutMe} from './about-me';
import registerServiceWorker from './registerServiceWorker';
//console.table(aboutMe);

// const Hello = () => {
//     return  (
//         <div className="div">
//             Hello!
//         </div>
//     )
// };

// class HelloClass extends Component {
//     render() {
//
//         return  (
//             <div className="div">
//                 Hello Class!
//             </div>
//         )
//     }
// }




ReactDOM.render(<ClassAndFunction />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

