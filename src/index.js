import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import "~bootstrap/scss/bootstrap";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



import Hw_1 from './Hw_1';
import Hw_2 from './Hw_2';
import List from "./components/List/List";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    {/*  <List />*/}
      {/*<Hw_1 />*/}
      {/*<Hw_2 />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
