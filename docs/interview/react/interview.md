# React 面试

声明式、组件化，用于构建用户界面的JavaScript库。

声明式：告诉程序要做什么。
命令式：告诉程序怎么去做。

函数式编程：关心数据的映射。
命令式编程：关心解决问题的步骤。

## Virtual DOM

## JSX

JavaScript的语法扩展。
为什么使用：渲染逻辑与其他的UI逻辑内在耦合。在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

## 受控和非受控组件

受控组件：React控制取值的表单输入（input、textarea、select等）元素叫做受控组件。表单元素的state放到React的状态属性中，并且通过setState更新。

非受控组件：状态更新不通过React，使用`ref`获取表单数据。

## 高阶组件

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



## 参考

[你要的 React 面试知识点，都在这了](https://juejin.im/post/5cf0733de51d4510803ce34e)
[什么是函数式编程思维？- 知乎](https://www.zhihu.com/question/28292740/answer/40336090)
