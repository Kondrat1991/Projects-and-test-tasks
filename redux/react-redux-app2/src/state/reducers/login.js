import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, id: action.payload.id };
    case LOGIN_ERROR:
      return { ...state, fetchErr: [action.err] };
    default:
      return state;
  }
}
