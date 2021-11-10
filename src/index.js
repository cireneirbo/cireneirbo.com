import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Nav from './components/Nav';
import Hello from './components/Hello';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
     <Header />
     <Nav />
     <Hello />
     <Portfolio />
     <Contact />
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
