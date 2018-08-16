import path from 'path';

import { BackUrl } from '../../utils/const';
import { API_ACTION } from './actionTypes';
import {
  loginSucc,
  loginErr,
  profileSucc,
  profileErr,
  newsSucc,
  newsErr
} from './syncAC';

// these actions are processed by special async middleware (in middleware folder),
// which compares the type field of the actions

export const loginConfirm = credentials => ({
  type: API_ACTION,
  payload: {
    datas: credentials,
    success: loginSucc,
    deny: loginErr
  },
  meta: {
    url: path.join(BackUrl, 'validate'),
    method: 'post',
    loadText: 'Checking data...'
  }
});

export const profileLoading = id => ({
  type: API_ACTION,
  payload: {
    sessionData: {
      key: 'id',
      value: id
    },
    success: profileSucc,
    deny: profileErr
  },
  meta: {
    url: path.join(BackUrl, 'user-info', id.toString()),
    method: 'get',
    updateSession: true,
    loadText: 'Loading profile...'
  }
});

export const newsLoading = () => ({
  type: API_ACTION,
  payload: {
    success: newsSucc,
    deny: newsErr
  },
  meta: {
    url: path.join(BackUrl, 'news'),
    method: 'get',
    loadText: 'Loading news...'
  }
});
