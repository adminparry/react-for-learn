import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './mui/css/mui.min.css'

import TimerStarter from './container/TimerStarter.jsx'
import TimerStarter2 from './container/TimerStarter2.jsx'
import Pullrefresh from './container/Pullrefresh.jsx'
import DtPicker from './container/DtPicker.jsx'





class App extends Component {

  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DtPicker />
        <div className="align" >
          <TimerStarter />
          <TimerStarter2 />
          
          

          <Pullrefresh />

        </div>




        
      </div>
    );
  }
}

export default App;