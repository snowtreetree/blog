# Promise实现

``` js
// 1、构造函数
// 2、接收的一个executor为函数，executor函数有两个参数 resolve，rejecr
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
            for(var i = 0; i < self.onResolvedCallback.length ; i++){
                self.onResolvedCallback[i](value)
            }
        }
    }

    function reject(reason){
         if(self.status === 'pending'){
            self.status = 'rejected'
            self.data = reason;
            for(var i = 0; i < self.onRejectedCallback.length ; i++){
                self.onRejectedCallback[i](reason)
            }
        }
    }

    // resolve,reject 为两个函数，只会执行一个
    // executor 可能会报错，报错时，直接执行reject
    try{
        executor(resolve,reject)
    }catch(e){
        reject(e)
    }
}

// then 方法
MyPromise.prototype.then = function then(onResolved,onRejected){
    var self = this;
    var promise2;
    // onResolved，onRejected默认函数的返回值，用于值的穿透
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

MyPromise.prototype.finally = function finally(fn){
    return this.then(function (value){
        fn()
    },function (reason){
        fn()
    })
}

var promise = new MyPromise((resolve,reject)=>{resolve(222)})

```