import React, {Component} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

class ToDoList extends Component {

    state = {
        items: []
    };

    addItems = (event) => {
        event.preventDefault();
        console.log(this.taskInput.value);
        if(this.taskInput.value !== '') {
         let task = {
             text: this.taskInput.value,
             id: Date.now(),
         };
            //console.log(task);
            this.setState({
            items:[...this.state.items, task]
            })
        }
        this.taskInput.value='';
    };

    deleteItems =(event) => {
        console.log(event.target.dataset.liid);
        let id = +event.target.dataset.liid;
        let filteredArr = this.state.items.filter(el => el.id !== id);
        this.setState ({
            items: filteredArr
        });

    };
    render() {

        let button = this.state.items.length > 5 ? <button type="submit">Stop Add</button> : <button type="submit">add</button>;


        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItems}>
                        <input placeholder="enter task" ref={(inputTag)=> this.taskInput = inputTag}>
                        </input>

                        {button}
                    </form>
                </div>
               <ToDoItem items={this.state.items} deleteItems={this.deleteItems}/>
            </div>
        )
    }
}

export default ToDoList;
