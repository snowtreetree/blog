# React 面试

声明式、组件化，用于构建用户界面的JavaScript库。

声明式：告诉程序要做什么。
命令式：告诉程序怎么去做。

函数式编程：关心数据的映射。
命令式编程：关心解决问题的步骤。

## Virtual DOM

DOM结构以虚拟的形式保存在内存中，然后通过ReactDOM等类库与真实的DOM进行同步。
是一个节点树，将元素、属性、和内容作为对象和属性。

## JSX

JavaScript的语法扩展。
为什么使用：渲染逻辑与其他的UI逻辑内在耦合。在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

## Hooks

16.8+, 可以在函数组件中使用state等特性。

## 类组件和函数式组件

类组件：通过Class类定义组件，可以使用生命周期、state等。
函数组件：只接受props对象并返回一个React元素，本质上是JavaScript函数。

函数组件不需要实例化，性能比类组件高，但是没有生命周期和state，但是现在Hook可以弥补。

## 避免组件重新渲染

React.memo
PureComponent

## 受控和非受控组件

受控组件：React控制取值的表单输入（input、textarea、select等）元素叫做受控组件。表单元素的state放到React的状态属性中，并且通过setState更新。

非受控组件：状态更新不通过React，使用`ref`获取表单数据。

## 高阶组件

复用组件的一种技巧。
参数是组件，返回新组建的函数。

## Fiber

### 解决的问题🤔

当加载或者更新组件树时，需要调用各个组件的生命周期函数，计算和对比Virtual DOM，最后再去更新DOM树，整个过程是同步的，整个周期可能周期较长。用户在操作页面的时候，有时会看到页面卡顿的现象。

### Fiber处理的方式

将耗时长的任务进行分片，每一片执行完成，都会将控制权交给React负责任务协调的模块，看下是否有紧急任务需要去做，没有的话就去集训更新。

### 影响

一个任务可能还没完成，就被打断执行其他任务，继续执行的时候，之前的任务可能会重头再来。

## super

在class组件constructor中，调用super之前，是无法访问this的。

## 生命周期

### <16

#### componentWillMount

渲染之前，只发生一次。

#### componentDidMount

第一次渲染之后，只在客户端。

#### componentWillReceiveProps

prop更新的时候，初始化render的时候不会调用。

#### shouldComponenetUpdate

prop或state更新时调用。

#### componentWillUpdate

更新之前。

#### componentDidUpdate

更新之后。

#### componentWillUnmount

组件移出。

#### getDerivedStateFromError

#### componentDidCatch

### 16.3+

新增了一些生命周期，并弱化了componentWillReceiveProps，componentWillMount，componentWillUpdate（均为render之前）。

#### getDerivedStateFromProps(nextProps, prevState)

用来取代之前的ComponentWillReceiveProps。

#### getSnapshotBeforeUpdate(prevProps,prevState)

render 之后执行，执行的时候DOM还未更新。
返回的参数会作为componentDidUpdate 的第三个参数。

## 参考

[你要的 React 面试知识点，都在这了](https://juejin.im/post/5cf0733de51d4510803ce34e)
[什么是函数式编程思维？- 知乎](https://www.zhihu.com/question/28292740/answer/40336090)
[React v16.3之后的组件生命周期函数](https://zhuanlan.zhihu.com/p/38030418)