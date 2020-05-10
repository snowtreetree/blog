# Promise

## 解决的问题（出现的背景）

回调地狱

## 什么是Promise

异步编程的一种解决方案，更为直观、合理的处理异步IO，Promise属于[微任务](./EventLoop.html)

## 状态

- Pending, 初始化的状态
- Fulfilled, resolve状态
- Rejected, reject状态
状态可以从 Pending => Fulfilled/Rejected，不可逆转

```js
// 示例
const pro_one = () => new Promise((resolve,reject) => {
    setTimeout(() => {resolve('pro_one')},3000)
})
const pro_two = () => new Promise((resolve,reject) => {
    setTimeout(() => {resolve('pro_two')},3000)
})
pro_two().then(res => {
        console.log(res);
        return pro_one()
    },
    ()=> {
        console.log('catch')
    }).then(res=>{
        console.log(res)
    })
```

## API

### resolve

是个方法，可以是普通对象或数据类型，也可以是Promise对象。执行resolve之后，会调用onFulfilled函数。
参数为Promise对象时，该对象作为resolve方法的返回值返回。

```js
const pro_one = new Promise((resolve,reject) => {
    setTimeout(() => {resolve('pro_one')},3000)
})
const pro_two = Promise.resolve(pro_one)
console.log(pro_one === pro_two)
// 返回为true
```

### reject

类似于resolve，但是返回Promise对象，不会作为resolve方法的返回值返回，执行resolve之后，会调用onRejected或catch函数。

```js
const pro_one = () => new Promise((resolve,reject) => {
    setTimeout(() => {reject('pro_one')},3000)
})
pro_one().then(res => {
        console.log(res)
    },(error) => {
        console.log('error',error)
    }).catch((error) => {
        console.log('catch',error)
    })
// 返回为true
```

## then

实例方法，参数为函数，onFulfilled和onRejected。两个函数的参数分别为resolve和reject的传值。  
在onFulfilled和onRejected中可以返回一个Promise或者一个其他结果，下面的then函数也可以接收。

## catch

用于接收异常，无onRejected函数，或者onFulfilled和onRejected执行报错的时候，都可以接收。也可以返回一个Promise或者一个其他结果。

## race

参数为数组，数组内为Promise任务，返回最先执行结束的任务结果，不管失败或者成功。

## all

参数为数组，数组内为Promise任务，全部执行完成后，返回执行结果，如果有一个失败，则会执行onRejected函数。只会将第一个返回的结果作为参数。