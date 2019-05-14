# react-router-dom

添加react-router进行一个spa的开发
``` bash 
create-react-app react-router-demo
cd react-router-demo
```
``` bash 
npm install --save react-router-dom
```

拆分路由可以用react-loadable

``` bash
npm install react-loadable --save
```

### git
https://github.com/adminparry/react-family-demo.git
``` bash
git clone https://github.com/adminparry/react-family-demo.git
cd react-router-demo
npm install 
npm start
```
完成大多数react单页面应用的基本结构 良好的开端等于成功的一半

随后的开发就是按照业务场景和react的api有序进行就可以了

##### 异步加载组件

异步加载组件实际上是对组件的复制从而拿到组件的引用

``` javascript

// 异步按需加载component
function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({default: Component}) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

```