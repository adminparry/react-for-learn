# mobx

``` bash
npm install mobx mobx-react --save
```

react-scripts@2.0.0之后的版本中 不再对Decorators支持

``` bash
npm install customize-cra react-app-rewired @babel/plugin-proposal-decorators --save
cd src && touch config-overrides.js

```
config-overrides.js
``` javascript
const { override, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
 addDecoratorsLegacy()
 );
```
当然不使用decorator也可以 看参考第二个

### git
https://github.com/adminparry/react-family-demo.git
``` bash
git clone https://github.com/adminparry/react-family-demo.git
cd react-mobx-demo
npm install 
npm run dev
```


##### 参考

https://www.html.cn/create-react-app/docs/can-i-use-decorators/

https://cn.mobx.js.org/best/decorators.html