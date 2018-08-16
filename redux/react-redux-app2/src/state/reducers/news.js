import { NEWS_SUCCESS, NEWS_ERROR } from '../actions/actionTypes';

export default function news(state = {}, action = {}) {
  switch (action.type) {
    case NEWS_SUCCESS:
      return { data: action.payload };
    case NEWS_ERROR:
      return { ...state, fetchErr: action.err };
    default:
      return state;
  }
}
