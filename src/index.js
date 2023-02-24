import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoApp from './ToDoApp';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <HashRouter >

  <TodoApp/>

  </HashRouter>,
  document.getElementById('root')
);


reportWebVitals();
