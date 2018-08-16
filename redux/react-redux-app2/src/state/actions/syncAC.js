import {
  REQUEST_SENT,
  RESPONSE_PROCESSED,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
  NEWS_SUCCESS,
  NEWS_ERROR
} from './actionTypes';

// simple actionCreators to realize sync actions in the app

export const startReq = text => ({
  type: REQUEST_SENT,
  payload: text
});

export const resProcessed = () => ({
  type: RESPONSE_PROCESSED
});

export const logout = () => ({
  type: LOGOUT
});

export const loginSucc = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

export const loginErr = err => ({
  type: LOGIN_ERROR,
  err
});

export const profileSucc = profile => ({
  type: PROFILE_SUCCESS,
  payload: profile
});

export const profileErr = err => ({
  type: PROFILE_ERROR,
  err
});

export const newsSucc = news => ({
  type: NEWS_SUCCESS,
  payload: news
});

export const newsErr = err => ({
  type: NEWS_ERROR,
  err
});
