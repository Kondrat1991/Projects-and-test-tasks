import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from "redux";

function rootReducer(state = [], action) {
    switch (action.type) {
        case 'ADD-ONE':
            return state.concat([action.data]);
        case 'SUBTRACT-ONE':
            return state.concat([action.data]);

    }
}

let store = createStore(rootReducer);

class App extends Component {
    constructor() {
        super();
        store.subscribe(() => {
            console.log(store.getState());
        });
    }

    increment() {
        console.log(('store'));
        store.dispatch({type: 'ADD-ONE', data: 'added-one'});
    }

    decrement() {
        console.log(('store'));
        store.dispatch({type: 'SUBTRACT-ONE', data: 'subtracted-one'});
    }

    render() {
        return (
            <div className="App">
                <h1> Simple counter</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default App;
