import counter from './counterReducer';
import tasks from './todoReducers';
import gallery from './fetchReducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    counter,
    tasks,
    gallery,
});

export default reducers;