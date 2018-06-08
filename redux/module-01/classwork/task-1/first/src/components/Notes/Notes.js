import React from 'react';
import Note from '../Note/Note';
import {connect} from 'react-redux';

const Notes =(props)=> {
    return (
    <ul className="note-container">

        {props.list.map((obj) => {
            console.log(obj.id);
            return (
                    <Note
                        key={obj.id}
                        id={obj.id}
                        notes={obj.text}
                    />
                )
            })
        }

    </ul>)
};

function MSTP(state) {
    return {
        list: state.tasks
    }
}
export default connect(MSTP)(Notes);

// export default Notes;