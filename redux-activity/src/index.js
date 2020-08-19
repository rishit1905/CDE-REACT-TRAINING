import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import { createStore } from "redux";
import { Provider } from 'react-redux';
import allReducers from './reducers/combinereducer';
import App from './app';


const store = createStore(allReducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

