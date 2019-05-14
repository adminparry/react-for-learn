# proxy


``` bash
npm install http-proxy-middleware --save
cd src && touch setupProxy.js

```

##### setupProxy.js
``` javascript
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }));
};
```
### git
https://github.com/adminparry/react-family-demo.git
``` bash
git clone https://github.com/adminparry/react-family-demo.git
cd react-proxy-demo
npm install 
npm start
```


### 参考
https://www.html.cn/create-react-app/docs/proxying-api-requests-in-development/
