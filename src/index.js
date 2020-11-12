import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  Router,
  Link,
  navigate
} from "@reach/router"

import Home from './Home';
import Recipes from './Recipes';
import About from './About';
import Navbar from './Navbar/Navbar';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Recipes path="/recipes" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
