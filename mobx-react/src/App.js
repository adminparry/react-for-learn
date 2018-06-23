import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TimerStarter from './container/TimerStarter.jsx'
import TimerStarter2 from './container/TimerStarter2.jsx'


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
       <TimerStarter />
       <TimerStarter2 />
      </div>
    );
  }
}

export default App;
