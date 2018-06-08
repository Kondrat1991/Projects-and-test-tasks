import React from 'react';
import Notes from './Notes';
import {addTasks} from './actions/todoActions.js';
import {connect} from 'react-redux';


const ToDo = (props) => {
    console.log(props);
    let taskInput ='';
    return (
        <div>
            <form action="" onSubmit={(e) => props.addTask(e,{text: taskInput.value,id: Date.now()})}>
                <input type="text" placeholder='enter task' ref={(input) => taskInput = input}/>
                <button>Add</button>
            </form>
            <Notes/>
        </div>

    )
};

function MDTP(dispatch) {
    return {
        addTask: function (e, taskParam) {
            e.preventDefault();
            dispatch(addTasks(taskParam))
        }
    }
}


export default connect(null, MDTP)(ToDo);