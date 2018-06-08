import counter from './counterReducer';
import {combineReducers} from 'redux';
import tasks from './ToDoReducer';


const reducers = combineReducers({
    counter,
    tasks,
});

export  default reducers;

// export default combineReducers({
//     counter,
// })

