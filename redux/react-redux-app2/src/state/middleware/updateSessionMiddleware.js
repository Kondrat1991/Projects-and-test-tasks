import { setLocalData } from '../../utils/SessionHelpers';
import { RESPONSE_PROCESSED, LOGOUT } from '../actions/actionTypes';
import { store } from '../../utils/const';

const updateSessionMiddleware = ({ getState }) => next => action => {
  const rules = [RESPONSE_PROCESSED, LOGOUT];
  const { type } = action;

  if (rules.indexOf(type) === -1) return next(action);

  const data = getState();

  delete data.fetching;
  if (type === LOGOUT) data.user.isAuthenticated = false;

  setLocalData(store, data);

  return next(action);
};

export default updateSessionMiddleware;
