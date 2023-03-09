import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
