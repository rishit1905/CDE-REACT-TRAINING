import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

ReactDOM.render(
    <HashRouter>
      <Login></Login>
    </HashRouter>,
  document.getElementById('root')
);

