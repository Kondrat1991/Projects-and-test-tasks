import { PROFILE_SUCCESS, PROFILE_ERROR } from '../actions/actionTypes';

export default function profile(state = {}, action = {}) {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return { data: action.payload };
    case PROFILE_ERROR:
      return { ...state, fetchErr: action.err };
    default:
      return state;
  }
}
