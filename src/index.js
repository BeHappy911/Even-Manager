import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Login_form from './Pages/Login_form';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <HashRouter >
        < Header/>
        < Login_form/>
        < Footer/>
    </HashRouter>
  //, document.getElementById('root')
);


reportWebVitals();
