import React from 'react';
import { connect } from 'react-redux';
import {add, min, reset, incAsync} from './actions/counterActions';
import { fetchData } from './actions/fetchAction';
import ToDo from './ToDo';
import {counterValue, galleryCount} from "./selectors";
import './Counter.css';

const Counter =  (props) => {
    // state = {
    //     count: 0,
    // };
    // add = () => {
    //     this.setState({
    //         ...this.state,
    //         count: this.state.count + 1
    //     })
    // };
    //
    // min = () => {
    //     this.setState({
    //         ...this.state,
    //         count: this.state.count - 1
    //     })
    // };
    //
    // reset = () => {
    //     this.setState({
    //         ...this.state,
    //         count: 0
    //     })
    // };

    // render() {
        return(
            <div className='redux'>
                <button onClick={props.fetch}>FETCH</button>
                <h1>{props.number}</h1>
                <button onClick={props.minus}>-</button>
                <button onClick={props.reload}>reset</button>
                <button onClick={props.plus}>+</button>
                <ToDo/>
            </div>
        )
    // }
};

function MSTP(state) {
    return {
        number: counterValue(state),
        amount: galleryCount(state),
    }
}

function MDTP(dispatch) {
    return {
        // plus: function () {
        //     dispatch(add())
        // },
        plus: function () {
            dispatch(incAsync())
        },

        minus: function () {
          dispatch(min())
        },

        reload: function () {
            dispatch(reset)
        },

        fetch: function () {
            dispatch (fetchData())
        }
    }
}

export default connect(MSTP, MDTP)(Counter)
















//
// <div className='redux'>
//     <h1>{this.state.count}</h1>
//     <button onClick={this.min}>-</button>
//     <button onClick={this.reset}>reset</button>
//     <button onClick={this.add}>+</button>
// </div>




// export default Counter;