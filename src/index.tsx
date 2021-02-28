import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import System from './System';

ReactDOM.render(
  <Provider store={store}>
    <System>
      <App />
    </System>
  </Provider>,
  document.getElementById('root')
);

