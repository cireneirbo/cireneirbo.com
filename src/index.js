import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Hello from './components/Hello';
import Nav from './components/Nav';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
     <Header />
     <Nav />
     <Hello />
     
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
