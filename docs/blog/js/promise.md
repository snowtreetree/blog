# Promise

## 解决的问题（出现的背景）

回调地狱

## 什么是 Promise

异步编程的一种解决方案，更为直观、合理的处理异步 IO，Promise 属于[微任务](./EventLoop.html)

## 状态

- Pending, 初始化的状态
- Fulfilled, resolve 状态
- Rejected, reject 状态
  状态可以从 Pending => Fulfilled/Rejected，不可逆转

```js
// 示例
const pro_one = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pro_one");
    }, 3000);
  });
const pro_two = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pro_two");
    }, 3000);
  });
pro_two()
  .then(
    (res) => {
      console.log(res);
      return pro_one();
    },
    () => {
      console.log("catch");
    }
  )
  .then((res) => {
    console.log(res);
  });
```

## API

### resolve

是个方法，可以是普通对象或数据类型，也可以是 Promise 对象。执行 resolve 之后，会调用 onFulfilled 函数。
参数为 Promise 对象时，该对象作为 resolve 方法的返回值返回。

```js
const pro_one = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pro_one");
  }, 3000);
});
const pro_two = Promise.resolve(pro_one);
console.log(pro_one === pro_two);
// 返回为true
```

### reject

类似于 resolve，但是返回 Promise 对象，不会作为 resolve 方法的返回值返回，执行 resolve 之后，会调用 onRejected 或 catch 函数。

```js
const pro_one = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("pro_one");
    }, 3000);
  });
pro_one()
  .then(
    (res) => {
      console.log(res);
    },
    (error) => {
      console.log("error", error);
    }
  )
  .catch((error) => {
    console.log("catch", error);
  });
// 返回为true
```

## then

实例方法，参数为函数，onFulfilled 和 onRejected。两个函数的参数分别为 resolve 和 reject 的传值。  
在 onFulfilled 和 onRejected 中可以返回一个 Promise 或者一个其他结果，下面的 then 函数也可以接收。

参数为非函数，会发生值穿透。

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
//   1
```

## catch

用于接收异常，无 onRejected 函数，或者 onFulfilled 和 onRejected 执行报错的时候，都可以接收。也可以返回一个 Promise 或者一个其他结果。

## race

参数为数组，数组内为 Promise 任务，返回最先执行结束的任务结果，不管失败或者成功。

## all

参数为数组，数组内为 Promise 任务，全部执行完成后，返回执行结果，如果有一个失败，则会执行 onRejected 函数。只会将第一个返回的结果作为参数。

## 串行

每次执行一个 Promise 任务，一个任务执行结束之后，再去执行下一个 Promise 任务

```js
const a = (a) =>
  new Promise((r) => {
    setTimeout(() => {
      console.log("a:", a);
      r(a);
    }, 1000);
  });
const arr = [1, 2, 3];
arr.reduce(
  (prePromise, id) =>
    prePromise.then(
      (preId) =>
        new Promise((r) =>
          setTimeout(() => {
            console.log(preId, id);
            r(id);
          }, 1000)
        )
    ),
  Promise.resolve(0)
);
arr.reduce(
  (prePromise, id) => prePromise.then((preId) => a(id)),
  Promise.resolve(0)
);
```
