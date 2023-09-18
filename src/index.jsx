import App from "./containers/App"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './javascripts/reportWebVitals';
import 'tachyons'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* <React.StrictMode>
    <CardList />
</React.StrictMode> */

// <CardList robots = {robots}/>
// This works as well in props

// root.render(
//   <React.StrictMode>
//     <Card />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
