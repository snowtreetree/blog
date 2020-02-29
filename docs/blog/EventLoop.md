# EventLoop小计

## 前言

最近在看执行相关的内容，看到了EventLoop 相关的内容，在此做个总结。

## 是什么

:::tip 事件循环。JavaScript是单线程的，前面耗时比较长的任务，会阻塞后面代码的执行，但对于IO（接口请求），后面的任务没必要等着响应回来之后才执行。对于那些一步一步执行，上一步执行完才执行下一步的，成为同步任务。不进入主线程，而进入任务队列（task quene）的任务，称为异步任务。EventLoop就是避免JavaScript在执行过程中出现阻塞的机制。  
:::

## 相关内容

### 微任务(microtasks)和宏任务(tasks)

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

宏任务

setTimeout、setInterval、requestAnimationFrame、setImmediate（node)

requestAnimationFrame 在页面重绘前，当前微任务执行后

微任务

promise then/catch/finally、MutationObserver/process.nextTick(node)

浏览器会在一个宏任务结束后，检查是否有微任务开始执行，requestAnimationFrame，在此执行，然后进行重新渲染，这个过程是循环执行的，这个过程（或者机制）就被成为 EventLoop。

下一次宏任务，必须要等到当前微任务执行完毕，才可以执行。
因此上面的任务的执行结果就位 `script start，script end，promise1，promise2，setTimeout`

```js
console.log('script start')
let promise = new Promise(function(resolve,reject){
    console.log('promise')
    resolve()
}).then(function(){
    console.log('resolve')
})
setTimeout(function(){
    console.log('settimeout');
})
console.log('script end')
// promise 的then属于宏任务，但是new Promise是同步的。
```

执行结果`script start，promise，script end，resolve，settimeout`

## 过程（待更新）


## 参考
[JS事件循环机制（event loop）之宏任务、微任务](https://segmentfault.com/a/1190000014940904)

[10分钟了解JS堆、栈以及事件循环的概念](https://juejin.im/post/5b1deac06fb9a01e643e2a95)

[彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)

[微任务、宏任务与Event-Loop](https://juejin.im/post/5b73d7a6518825610072b42b)

[一次弄懂Event Loop](https://juejin.im/post/5c3d8956e51d4511dc72c200)