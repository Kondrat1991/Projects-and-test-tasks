import React, {Component} from 'react';

// Action and reduce new components;
// take them type and id;
// add case delete;
// state.filter(el)=> el.id!==id;
// at click event identify id;
import Notes from '../Notes/Notes';
import './index.css';
import {connect} from "react-redux";
import {addTasks, deleteTasks} from '../../action/ToDoAction';
// import {deleteTasks} from '../../action/ToDoAction';

// import {connect} from 'react-redux';

const ToDo = (props) => {
    console.log(props);



    // state = {
    //     notes: []
    // };

    //old React method

    // addNote = (event) => {
    //     event.preventDefault();
    //     let task = {
    //         text: this.taskInput.value,
    //         id: Date.now(),
    //     };
    //     this.taskInput.value = '';
    //     this.setState({
    //         ...this.state,
    //         notes: [...this.state.notes, task]
    //     })
    //
    // };

    // render() {
    // const {notes} = this.state;
    let taskInput = '';
    return (
        <div className="wrapper">
            <form className="note-form" action="#" onSubmit={(e) => props.addTask(e, taskInput.value)}>
                <input type="text" ref={(input) => taskInput = input}/>
                <button className="note-button">
                    Add note
                </button>
            </form>
            <Notes/>
        </div>)
    // }
}

//Map dispatch to props
function MDTP(dispatch) {
    return {
        addTask: function (e, taskParam) {
            e.preventDefault();
            dispatch(addTasks(taskParam))
        },
        // deleteTask:function (e,id) {
        //     // e.preventDefault();
        //     dispatch(deleteTasks(id))
        // }
    }
}

export default connect(null,MDTP)(ToDo);

