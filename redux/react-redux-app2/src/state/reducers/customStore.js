import { createStore, applyMiddleware } from 'redux';

import { getInitStateFromStorageByKey } from '../../utils/SessionHelpers';

export default function customStore(key) {
  const state = getInitStateFromStorageByKey(key);
  if (state)
    return (reducer, middleware) =>
      createStore(reducer, state, applyMiddleware(...middleware));
  return (reducer, middleware) =>
    createStore(reducer, applyMiddleware(...middleware));
}
