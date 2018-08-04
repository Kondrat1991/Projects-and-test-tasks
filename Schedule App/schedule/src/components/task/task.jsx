import React from 'react';
import PropTypes from 'prop-types';




const ToDoItem = ({items, addClass}) => {

    const taskArr = items.map(el => <div className="task__item" key={Math.random()}>




        <div className="task__day" key={el.id}data-liid={el.id}><p className="task__info">{el.text}</p></div>

<button className="accordion" onClick={addClass}> </button>



<div className="task__panel">
   <div className="task task__time" key={el.id}><p className="task__text">{el.time[1]}</p> <p className="task__text">{el.time[2]}</p> <p className="task__text">{el.time[3]}</p> </div>
        <div className="task task__class" key={el.id}><p className="task__text">{el.class[1]}</p> <p className="task__text">{el.class[2]}</p> <p className="task__text">{el.class[3]}</p></div>
        <div className="task task__coach" key={el.id}><p className="task__text">{el.coach[1]}</p><p className="task__text">{el.coach[2]}</p><p className="task__text">{el.coach[3]}</p></div>
        <div className="task task__level" key={el.id}><p className="task__text">{el.level[1]}</p><p className="task__text">{el.level[2]}</p><p className="task__text">{el.level[3]}</p></div>

</div>
</div>);
    console.log("taskArray",taskArr);
    return (




        <div className="task__container">


{taskArr}
</div>



    )
};

ToDoItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        time: PropTypes.object,
        class: PropTypes.object,
        coach: PropTypes.object,
        id: PropTypes.number
    })),


    deleteItems: PropTypes.func,

};


export default ToDoItem;


