import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/timerStarter.css'
import './mui/css/mui.css'
import mui from './mui/js/mui'
// import mui from 'mui'

import TimerStarter from './container/TimerStarter.jsx'
import TimerStarter2 from './container/TimerStarter2.jsx'


class App extends Component {
  state = {
    arr:[]
  }
  componentDidMount() {
    mui.init({
        pullRefresh: {
          container: '#pullrefresh',
          down: {
            style:'circle',
            callback: pulldownRefresh
          },
          up: {
            auto:true,
            contentrefresh: '正在加载...',
            callback: pullupRefresh
          }
        }
      });
      
      var count = 0;
      function pullupRefresh() {
        setTimeout(function() {
          mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
          var table = document.body.querySelector('.mui-table-view');
          var cells = document.body.querySelectorAll('.mui-table-view-cell');
          var newCount = cells.length>0?5:20;//首次加载20条，满屏
          for (var i = cells.length, len = i + newCount; i < len; i++) {
            var li = document.createElement('li');
            li.className = 'mui-table-view-cell';
            li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
            table.appendChild(li);
          }
        }, 1500);
      }

      function addData() {
        var table = document.body.querySelector('.mui-table-view');
        var cells = document.body.querySelectorAll('.mui-table-view-cell');
        for(var i = cells.length, len = i + 5; i < len; i++) {
          var li = document.createElement('li');
          li.className = 'mui-table-view-cell';
          li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
          //下拉刷新，新纪录插到最前面；
          table.insertBefore(li, table.firstChild);
        }
      }
      /**
       * 下拉刷新具体业务实现
       */
      function pulldownRefresh() {
        setTimeout(function() {
          addData();
          mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
          mui.toast("为你推荐了5篇文章");
        }, 1500);
      }
    
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
        <div className="align" >
          <TimerStarter />
          <TimerStarter2 />
          
          

          

        </div>




        <div>
            <div id="pullrefresh" className="mui-content mui-scroll-wrapper">
              <div className="mui-scroll">
               
                <ul className="mui-table-view mui-table-view-chevron"></ul>
              </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
