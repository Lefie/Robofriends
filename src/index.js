import React from 'react'; // a view library. does the DOM manipulation. present in VR, browser, mobile devices etc
import ReactDOM from 'react-dom/client'; //used for DOM, websites
import './index.css'; //add css file 
//import Card from './Card';
import App from './Containers/App';

import reportWebVitals from './reportWebVitals'; 
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
 
 
  
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
