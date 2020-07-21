# EventLoop小计

## 前言

最近在看执行相关的内容，看到了EventLoop 相关的内容，在此做个总结。

## 是什么

事件循环。JavaScript是单线程的，意味着任务需要排队执行。如果前面耗时比较长的任务，会阻塞后面代码的执行，但对于IO（接口请求），后面的任务没必要等着响应回来之后才执行。对于那些一步一步执行，上一步执行完才执行下一步的，称为同步任务。不进入主线程，而进入任务队列（task quene）的任务，称为异步任务。EventLoop就是避免JavaScript在执行过程中出现阻塞的机制。  

::: tip

JavaScript单线程原因，常见解释为，若有两个线程（A，B）同一时间在操作同一个DOM（D）元素，A线程在往D元素上添加内容（文本、属性或其他内容），但是B线程在删除D元素。

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

Promise then/catch/finally、MutationObserver/process.nextTick(node)

浏览器会在一个宏任务结束后，检查是否有微任务开始执行，requestAnimationFrame，在此执行，然后进行重新渲染，这个过程是循环执行的，这个过程（或者机制）就被成为 EventLoop。

下一次宏任务，必须要等到当前微任务执行完毕，才可以执行。
因此上面的任务的执行结果就位 `script start，script end，promise1，promise2，setTimeout`

`Promise的then属于微任务。`

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

### 堆栈

栈内存储基础类型，Number String Null Undefined Boolean
堆内一般存储引用数据类型，对象、数组等

### 调用栈、执行上下文

调用栈是解释器追踪函数执行流的一种机制。
[执行上下文]('./executionContext.md')是代码的执行环境，通常由三种（Global、function、eval）


[执行过程](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

```js
function greeting() {
   sayHi();
}
function sayHi() {
   return "Hi!";
}
greeting();
...
```

1、上面代码在执行时，会先进入Global的执行上下文中，这个执行上下文被放到了调用栈的栈底

2、代码继续执行（函数生命略过），当执行到greeting时，创建一个greeting执行上下文，放到调用栈中

3、在greeting中，调用了sayHi，同样会创建sayHi执行上下文中，放到调用栈

4、sayHi执行完，出栈

6、greeting 在sayHi函数执行完成之后并无其他代码需要执行，栈中删除greeting

...

## 大致过程

![eventLoop](https://tva1.sinaimg.cn/large/00831rSTgy1gclmyzfbypj30ap07wmyy.jpg)

1、同步任务在主线程上执行，形成执行栈(call stack)

2、主线程外还有一个任务队列，异步任务执行完成之后，就在任务队列放置一个时间

3、执行栈上的任务执行完毕，系统读取任务队列

4、任务队列执行完毕，重新检查主线程上的任务（循环往复）

::: tip

对于AJAx、setTimeout这些，浏览器提供的webapi，在执行完成之后会放到callbackquene，等待系统读取
:::

## 参考

[call stack MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack)

[执行上下文](https://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html)

[JS事件循环机制（event loop）之宏任务、微任务](https://segmentfault.com/a/1190000014940904)

[10分钟了解JS堆、栈以及事件循环的概念](https://juejin.im/post/5b1deac06fb9a01e643e2a95)

[彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)

[微任务、宏任务与Event-Loop](https://juejin.im/post/5b73d7a6518825610072b42b)

[一次弄懂Event Loop](https://juejin.im/post/5c3d8956e51d4511dc72c200)

[到底什么是Event Loop呢](https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be)

[直观查看执行栈和执行队列](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
