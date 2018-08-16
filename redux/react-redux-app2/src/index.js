import React from 'react';
import { render } from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import App from './components/App/App';
import reducer from './state/reducers/rootReducer';
import {
  asyncMiddleware,
  updateSessionMiddleware
} from './state/middleware/index';
import customStore from './state/reducers/customStore';
import { store as key } from './utils/const';
import registerServiceWorker from './registerServiceWorker';

const middleware = [logger, updateSessionMiddleware, asyncMiddleware];

const store = customStore(key)(reducer, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
