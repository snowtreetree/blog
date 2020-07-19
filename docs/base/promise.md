# Promise

## 简介

异步解决方案。===>（回调地狱）。

- 状态不受外界影响
- 状态变更不可逆

三种状态，pending,fulfilled,rejected。

```js
const p1 = Promise.resolve('p1')
const p2 = Promise.resolve('p2')
const p3 = Promise.reject('p3')
const p4 = Promise.reject('p4')
```

### finally

无论状态的变更为何种状态，promise都会去执行。执行顺序参照finally函数所在位置。

```js
Promise.all([p1,p2]).finally((res) => {
    console.log('all resolve finally',res)
}).then(res => {
    console.log('all resolve',res)
    throw 'all resolve'
}).catch((err) => {
    console.log('all resolve catch',err)
})
```

### all

当所有函数执行成功的时候，会执行传入的resolve函数。
当其中一个失败，就会将失败的结果，传入到reject函数中。

```js
Promise.all([p1,p2,p3,p4]).then(res => {
  console.log('all resolve',res)
},(err) => {
  console.log('all reject',err)
  throw 'reject error'
}).catch((err) => {
  console.log('all catch',err)
})
```

### race

只要有一个函数执行成功，就会执行传入的resolve函数。

全部失败的时候，执行传入的reject函数，函数的参数为第一个执行失败的结果。

```js
Promise.race([p3,p4]).then(res => {
  console.log('race resolve',res)
},(err) => {
  console.log('race reject',err)
  throw 1
}).catch((err) => {
  console.log('race catch',err)
})
```

### 其他

在一个promise里面返回一个，reject的promise，catch也同样能够捕获。

```js
p1.then(res => {
    return p3
}).catch(err => {
    console.log('return reject',err)
})
```

```js
const p5 = new Promise((resolve,reject) => {
    // 同步
    console.log(1)
    resolve()
    console.log(2)
})

p5.then(res => {
    console.log(3)
})

console.log(4)

// 1
// 2
// 4
// 3
```

```js
// promise构造函数只执行一次，一旦执行，后续调用then，都会直接拿到对应的值。
const p6 = new Promise(resolve => {
    setTimeout(() => {
        resolve('success')
    },1000)
})

const start = +new Date

p6.then(res => {
    console.log(+new Date - start)
})
p6.then(res => {
    console.log(+new Date - start)
})
// 1005
// 1005 可能略有不同

```

## 实现

### 构造函数

``` js
// 1、构造函数
// 2、接收的一个executor为函数，executor函数有两个参数 resolve，reject，这两个函数定义在promise内部，供用户调用
// 3、状态status, pending, fulfilled, rejected 状态一旦改变，不能恢复


function MyPromise(executor){
    var self = this
    self.status = 'pending'; // 当前执行状态
    self.data = undefined;
    // 操作成功，执行executor的resolve(第一个函数参数)，并传入结果
    // 操作失败，执行executor的reject(第二个函数参数)，并传入结果
    self.onResolvedCallback = [] // resolve函数集，Promise结束之前可能有多个回调添加到上面
    self.onRejectedCallback = [] // reject 函数集，Promise结束之前可能有多个回调添加到上面

    function resolve(value){
        if(self.status === 'pending'){
            self.status = 'resolved';
            self.data = value
            var resolveLength = self.onResolvedCallback.length
            for(var i = 0; i < resolveLength ; i++){
                self.onResolvedCallback[i](value)
            }
        }
    }

    function reject(reason){
         if(self.status === 'pending'){
            self.status = 'rejected'
            self.data = reason;
            var rejectLength = self.onRejectedCallback.length;
            for(var i = 0; i < rejectLength ; i++){
                self.onRejectedCallback[i](reason)
            }
        }
    }

    // resolve,reject 为两个函数，只会执行一个
    // executor 可能会报错，报错时，直接执行reject
    try{
        // resolve，reject 作为参数传递出去
        executor(resolve,reject)
    }catch(e){
        reject(e)
    }
}
```

### then 方法

- 定义在promise的原型链上
- 返回一个新的promise
- 两个函数参数，onResolved、onRejected

```js
MyPromise.prototype.then = function then(onResolved,onRejected){
    var self = this;
    var promise2;
    // onResolved，onRejected默认函数的返回值，用于值的穿透 => 内容直接向下传递。 function(v){ return v}
    onResolved = typeof onResolved === 'function'?onResolved:function(v){ return v};
    onRejected = typeof onRejected === 'function'?onRejected:function(r){ return r};
    if(self.status === 'resolved'){
        return promise2 = new MyPromise(function(resolve,reject){
            try{
                var x = onResolved(self.data);
                // 结果已经是promise的话，直接将x的执行结果作为返回
                // x 执行的结果传到当前的resolve（promise2）,promise2的data变为x的执行结果
                if(x instanceof MyPromise){
                    x.then(resolve,reject)
                }
            }catch(e){
                reject(e)
            }
        })
    }
    if(self.status === 'rejected'){
        return promise2 = new MyPromise(function(resolve,reject){
             try{
                var x = onRejected(self.data);
                if(x instanceof MyPromise){
                    x.then(resolve,reject)
                }
            }catch(e){
                reject(e)
            }
        })
    }
    if(self.status === 'pending'){
        // 为pending时，直接加入到onResolvedCallback，onRejectedCallback中去，待执行结束后调用
        return promise2 = new MyPromise(function(resolve,reject){
           self.onResolvedCallback.push(function(value){
               var x = onResolved(value)
               if(x instanceof MyPromise){
                   x.then(resolve,reject)
               }
               resolve(x)
           })
           self.onRejectedCallback.push(function(value){
               var x = onRejected(value)
               if(x instanceof MyPromise){
                   x.then(resolve,reject)
               }
               reject(x)
           })
        })
    }
}


MyPromise.prototype.catch = function catch(onRejected){
    return this.then(null,onRejected)
}

MyPromise.prototype.resolve = function resolve(value){
    return new MyPromise(function(resolve,reject){
        resolve(value)
    })
}

MyPromise.prototype.reject = function reject(reason){
    return new MyPromise(function(resolve,reject){
        reject(reason)
    })
}

MyPromise.prototype.finally = function finally(fn){
    return this.then(function (value){
        fn()
    },function (reason){
        fn()
    })
}

var promise = new MyPromise((resolve,reject)=>{resolve(222)})

```

## 参考

[Promise 必知必会](https://juejin.im/post/5a04066351882517c416715d)
[Promise 实现](https://github.com/xieranmaya/blog/issues/3)