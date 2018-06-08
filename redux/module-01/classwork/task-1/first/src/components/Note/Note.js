import React from 'react';
import {deleteTasks} from '../../action/ToDoAction';
import {connect} from 'react-redux';

const Note = ({notes,id, deleteTask}) => {
    return (
        <li className="note-item" onClick={()=> deleteTask(id)}> {notes}</li>)
};

function MDTP(dispatch) {
    return {
        deleteTask: function (id) {
            dispatch(deleteTasks(id))
        }
    }
}

export default connect(null, MDTP)(Note);
// export default Note;





