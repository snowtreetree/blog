# React VS Vue

## JSX & Vue Template

JSX 更灵活，更方便去写HOC。

Template 更符合前端的代码习惯

## 复用

mixin => HOC(Vue 使用模板嵌套) => render prop(Vue slot) => Hook

## 理念

React 推崇函数式，直接去刷新。通过调用setState触发局部刷新。为了避免不必要的更新，会对setState进行合并操作。需要自己通过shouldComponentUpdate/PureComponent等实现优化。

Vue 进行数据的拦截和代理。不需要特别的优化就可以达到很好的性能。

## hooks

React 需要保证Hook的调用顺序一致。
Vue 是对数据进行代理，不需要记录hooks的调用记录。

## this

React 中事件处理函数的this，默认不指向当前实例。

Vue 处理函数中的this，默认指向当前实例。

## 组件通信

### React

- props
- context
- 发布订阅模式
- Ref

### Vue

- props
- provide/inject
- Ref
