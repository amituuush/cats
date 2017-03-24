import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import App from './components/App/App';
import reducers from './reducers';

import './style.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise, logger())(createStore);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <AppContainer>
    <App />
  </AppContainer>
  </Provider>
  , document.querySelector('.root')
);
