import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hw_1 from './Hw_1';
import List from "./components/List/List";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <List />
      {/*<Hw_1 />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
