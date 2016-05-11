import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from  'redux';
import { reducer } from './reducers/index';
import App from './containers/App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
