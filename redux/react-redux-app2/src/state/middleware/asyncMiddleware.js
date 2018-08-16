import axios from 'axios';

import { API_ACTION } from '../actions/actionTypes';
import { startReq, resProcessed } from '../actions/syncAC';

let process = false;

const asyncMiddleware = ({ dispatch }) => next => async action => {
  try {
    if (action.type !== API_ACTION) return next(action);

    if (process) {
      setTimeout(() => {
        dispatch(action);
      }, 0);
      return Promise.resolve();
    }

    process = true;

    const { url, method, loadText } = action.meta;
    const { success, deny, datas } = action.payload;

    dispatch(startReq(loadText));

    const options = {
      method,
      url,
      headers: { 'Content-Type': 'application/json' }
    };

    if (datas) options.data = datas;

    const { data } = await axios(options);

    if (data.status === 'ok') dispatch(success(data.data));
    else dispatch(deny(data.message));

    dispatch(resProcessed());
    process = false;
  } catch (err) {
    const { deny } = action.payload;

    dispatch(deny('Сервер недоступен'));
    dispatch(resProcessed());
    process = false;
  }

  return next(action);
};

export default asyncMiddleware;
