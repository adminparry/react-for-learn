# HMR 热替换

### index.tsx
默认应用使用hot-reload形式 由于前端工程的越来越大化 开发模式中我们也希望有一些状态的保留 如果reload则所有的状态都丢失了 耗时也比较长 所以应用现在比较流行也比较优秀的方式来进行开发

我们只需要在入口文件index修改其根节点就可以 这是webpack给我们带来的便利

##### ts
``` typescript
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';

import App from './App';


const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if ((module as any)['hot']) {

  (module as any)['hot']['accept']("./App", () => {

    ReactDOM.render(<App />, rootEl);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
##### js
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';

import App from './App';


const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {

  module.hot.accept("./App", () => {

    ReactDOM.render(<App />, rootEl);
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
