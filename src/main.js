require("!style!css!../node_modules/tachyons/css/tachyons.min.css");
require("!style!css!./style.css");

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from  'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

import App from './containers/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
