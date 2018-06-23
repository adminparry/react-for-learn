import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react"

import timerData from './observable/App';
let timer = null;

@observer
class App extends Component {

  
  startOpenTime(){
     

      if(timerData.startState){

        clearInterval(timer);
        

      }else{
        timer = setInterval(() => {
            timerData.secondsPassed++;
        }, 100);
      }

      timerData.startState = !timerData.startState

  }
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
        <span>Seconds passed: { timerData.secondsPassed } </span>
        <button onClick={this.startOpenTime}>{!!timerData.startState?'暂停计时':'开始计时'}</button>
      </div>
    );
  }
}

export default App;
