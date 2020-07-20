# 完整实现

```js
var MyPromise  = function(executor) {
    var self = this;
    self.status = 'pending';
    self.data=void(0);
    self.onResolved = []
    self.onRejected = []

    function resolve(value){
        if(self.status === 'pending'){
            self.status='resolved';
            self.data = value
            var resolvedLength = self.onResolved.length
            for(i=0;i<resolvedLength;i++){
                resolvedLength[i](value)
            }
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.status = 'rejected';
            selef.data = reason;
            var rejectedLength = self.onRejected.length
            for(i=0;i<rejectedLength;i++){
                rejectedLength[i](value)
            }
        }
    }

    executor(resolve,reject)
}

MyPromise.prototype.then = function(onResolve,onReject){
    var self = this;
    var data = self.data
    onResolved = typeof onResolve === 'function' ? onResolve : function(v){return v};
    onRejected =  typeof onReject === 'function' ? onReject : function(v){return v};
    if(self.status === 'resolved'){
        return new MyPromise(function(resolve,reject){
             var resolveValue =onResolved(data)
            if(resolveValue instanceof MyPromise){
                resolveValue.then(resolve,reject)
            }
            resolve(resolveValue)
        })
    }
    if(self.status === 'rejected'){
        return new MyPromise(function(resolve,reject){
            var rejectedValue =onRejected(data)
            if(rejectedValue instanceof MyPromise){
                rejectedValue.then(resolve,reject)
            }
            reject(resolveValue)
        })
    }
    if(self.status === 'pending'){
         return new MyPromise(function(resolve,reject){
             self.onResolved.push(function(value){
                var resolveValue =onResolved(data)
                if(resolveValue instanceof MyPromise){
                    resolveValue.then(resolve,reject)
                }
                resolve(resolveValue)
            })
            self.onRejected.push(function(value){
                var rejectedValue =onResolved(data)
                if(rejectedValue instanceof MyPromise){
                    rejectedValue.then(resolve,reject)
                }
                reject(rejectedValue)
            })
         })
    }
}

MyPromise.prototype.catch = function(onRejected){
    return this.then(null,onRejected)
}

MyPromise.prototype.finally = function(onFinally){
    this.then(function(v){
        onFinally(v)
    },function(r){onFinally(r)})
}

MyPromise.prototype.resolve = function(v){
    return new MyPromise(function(resolve,reject){resolve(v)})
}

```
