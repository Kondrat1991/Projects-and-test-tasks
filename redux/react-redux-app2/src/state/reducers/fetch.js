import { REQUEST_SENT, RESPONSE_PROCESSED } from '../actions/actionTypes';

const initialState = {
  loadText: 'Loading...',
  isFetching: false
};

export default function fetch(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SENT:
      return { loadText: action.payload, isFetching: true };
    case RESPONSE_PROCESSED:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}
