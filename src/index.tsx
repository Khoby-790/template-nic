import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import System from './System';
import Taoster from './components/Taoster';

ReactDOM.render(
  <Provider store={store}>
    <System>
      <App />
      <Taoster />
    </System>
  </Provider>,
  document.getElementById('root')
);

