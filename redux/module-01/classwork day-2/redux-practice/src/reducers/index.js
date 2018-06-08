import counter from './counterReducer';
import tasks from './todoReducers';
import Gallery from './fetchReducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    counter,
    tasks,
    Gallery,
});

export default reducers;
