import React from 'react';
import {connect} from 'react-redux';
import {add, min, reset, incAsync} from './actions/counterActions';
import {fetchData} from './actions/fetchAction';
import ToDo from './ToDo';
import Gallery from './Gallery';
import './Counter.css';
import {counterValue, galleryCount} from "./selectors";

const Counter = (props) => {
    return (

        <div className="main-wrapper">
            <h2>{props.amount} </h2>
            <div className='redux'>
                <h1>{props.number}</h1>
                <button onClick={props.minus}>-</button>
                <button onClick={props.reload}>reset</button>
                <button onClick={props.plus}>+</button>
                <button onClick={props.fetch}> Fetch</button>
                <ToDo/>
            </div>
            <div className='gallery-div'>
                <Gallery/>
            </div>

        </div>

    )
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

        minus: function () {
            dispatch(min())
        },

        reload: function () {
            dispatch(reset)
        },

        plus: function () {
            dispatch(incAsync())
        },

        fetch: function () {
            dispatch(fetchData())
        }
    }
}

export default connect(MSTP, MDTP)(Counter);













