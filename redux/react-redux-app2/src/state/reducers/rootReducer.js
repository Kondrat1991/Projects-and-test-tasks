import { combineReducers } from 'redux';

import login from './login';
import profile from './profile';
import news from './news';
import fetch from './fetch';

const reducer = combineReducers({
  fetching: fetch,
  user: login,
  profile,
  news
});

export default reducer;
