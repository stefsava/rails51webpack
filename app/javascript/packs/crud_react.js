import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import configureStore from '../store/configureStore.js';
import { syncHistoryWithStore } from "react-router-redux"

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
    , document.getElementById('root'));
})
