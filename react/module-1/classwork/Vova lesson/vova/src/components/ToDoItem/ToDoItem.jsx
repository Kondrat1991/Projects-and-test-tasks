import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
//onClick={() => deleteItems(el.id)};

const ToDoItem = ({items, deleteItems}) => {
    const taskArr = items.map(el => <li key={el.id} data-liid={el.id}> {el.text}</li>);
    return (
        <ul className="theList" onClick={deleteItems}>

            <FlipMove>
                {taskArr}
            </FlipMove>


        </ul>
    )
};

ToDoItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        id: PropTypes.number
    })),


    deleteItems: PropTypes.func,

};


export default ToDoItem;


