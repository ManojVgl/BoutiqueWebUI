import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import './app/styles/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/responsive.css';
import './app/styles/componentStyles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





