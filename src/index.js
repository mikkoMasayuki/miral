import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/framework/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';

if(window.location.pathname.includes('/project')) {

  const e = document.querySelector('#mapwrap');
  e.style.display = 'none';  

} 

if(window.location.pathname === '/admin/login') {
  const body = document.querySelector("body");
  body.className = "log_in";

  const e = document.querySelector('#mapwrap');
  e.style.display = 'none';  
} 

if(window.location.pathname === '/login') {
  const body = document.querySelector("body");
  body.className = "log_in";

  const e = document.querySelector('#mapwrap');
  e.style.display = 'none';  
} 


if(window.location.pathname === '/admin/projects') {
  var body = document.querySelector("body");
  body.className = "cms_body";
} 

if(window.location.pathname === '/admin/addproject') {
  var body = document.querySelector("body");
  body.className = "cms_body";
  const e = document.querySelector('#mapwrap');
  e.style.display = 'none';    
} 

if(window.location.pathname.includes('/admin/update')) {
  var body = document.querySelector("body");
  body.className = "cms_body";

  const e = document.querySelector('#mapwrap');
 e.style.display = 'none';  
} 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
