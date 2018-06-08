import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';

const Notes = (props)=> {
    return (
        <ul>
            {props.list.map(el => <Note key={el.id} text={el.text}/>)}
        </ul>
        )

};

function MSTP(state) {
    return {
        list: state.tasks,
    }
}

export default connect(MSTP)(Notes);