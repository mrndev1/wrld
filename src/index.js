import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import App from './App/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

const routes = (<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);
const root = document.getElementById('root');
render(routes, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
