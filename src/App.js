import React, { Component } from 'react';

import './App.css';
// // import Body from './components/Body';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Main from './/components/Main';
// import Sidebarmenu from './components/Sidebarmenu';
import Routes from './routes/Router';
import { Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
         {/* <div id="root"></div> */}
    {/* <div id="layout-a" class="theme-blue"></div> */}
    <Routes/>
       
             </div>
    );
  }
}

export default App;