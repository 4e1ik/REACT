import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ls_23_11 from './Ls_23_11';
// import "~bootstrap/scss/bootstrap";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



import Hw_1 from './Hw_1';
import Hw_2 from './Hw_2';
import List from "./components/List/List";
import Ls_23_11 from "./Ls_23_11";
// import reportWebVitals from './reportWebVitals';

import Ls_30_11 from "./Ls_30_11";
import {Provider} from 'react-redux';
import {store} from "./store/store";
import {Countries} from "./Countries";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    {/*<Ls_30_11 />*/}
    <Countries />
  </Provider>

      {/*<Ls_23_11 />*/}

    {/*<App />*/}

      {/*<BrowserRouter>*/}
      {/*    <App />*/}
      {/*</BrowserRouter>*/}

    {/*  <List />*/}
      {/*<Hw_1 />*/}
      {/*<Hw_2 />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
