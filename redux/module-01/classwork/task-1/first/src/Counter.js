import React from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import {add, min, reset, incAsync} from './action/counterActions';

const Counter = (props) => {
    // state = {
    //     count: 0
    // };
    //
    // add = () => {
    //     this.setState({
    //         ...this.state, count: this.state.count + 1
    //     })
    // };
    //
    // min = () => {
    //     this.setState({
    //         ...this.state, count: this.state.count - 1
    //     })
    // };
    //
    //
    // reset = () => {
    //     this.setState({
    //         ...this.state, count: 0
    //     })
    // };


    // render() {
    return (
        <div className="wrapper">
            <div className="ToDo-container">
                <form>
                    <input placeholder="note-task">
                    </input>

                    <button className="note-button">
                        Add Note
                    </button>
                </form>

                <ul>

                 <li>Note</li>
                    <li>Note2</li>
                    <li>Note3</li>
                    <li>Note4</li>
                    <li>Note5</li>


                </ul>

            </div>

            <div className="redux">
                <h1>{props.number}</h1>
                <button onClick={props.add}>Add</button>
                <button onClick={props.min}>Min</button>
                <button onClick={props.reload}>Reset</button>
            </div>
        </div>

    )
    // };
};

function MSTP(state) {
    return {
        number: state.counter
    }
}

function MDTP(dispatch) {
    return {
        // add: function () {
        //     dispatch(add())
        // },
        min: function () {
            dispatch(min())
        },

        reload: function () {
            dispatch(reset())
        },
        plus: function () {
            dispatch(incAsync())
        }
    }
}

export default connect(MSTP, MDTP)(Counter);
// export default Counter;
