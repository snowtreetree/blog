# bind、call、apply 实现

## call

``` js
// 会出现number => string的情况
Function.prototype.myCall = function (context) {
    // content 表示绑定的对象，为null的时候指向window
    var context = context || window
    // this指向函数
    context.fn = this
    // 参数
    var args = []
    // 第一个参数是context
    for(var i = 1;i<arguments.length; i++){
        args.push(`arguments[${i}]`)
    }
    // 执行完之后，args = [arguments[1],arguments[2]...]

    // 执行
    // `context.fn(${args})` 中的args会调用 toString方法
    var value = eval(`context.fn(${args})`)
    delete context.fn
    return value
}

```

## apply

``` js
Function.prototype.myApply = function (context,arr) {
    // arr 表示参数为数组,可为空，也可采用arguments[1]获取

    // content 表示绑定的对象，为null的时候指向window
    var context = context || window
    // this指向函数
    context.fn = this
    // value 为返回值
    var value
    if(!arr){
        value = context.fn()
    } else {
         // 参数
        var args = []
        // 第一个参数是context
        for(var i = 0;i<arr.length; i++){
            args.push(`arr[${i}]`)
        }
        // 执行
        value = eval(`context.fn(${args})`)
    }
    delete context.fn
    return value
}

```

## bind

``` js
Function.prototype.myBind = function(context){
    // this指向当前函数
    var self = this
    // 绑定时传参
    var args = Array.prototype.slice.call(arguments,1)
    var F = function F(){}
    // 闭包，哈哈
    function myBind(){
        var myArgs  = Array.prototype.slice.call(arguments)
        // 使用apply的原因是myArgs 和args 会以数组的形式传递给this函数
        // 你知道的js中有讲到 new 和bind的优先级，new虽然会改变新对象的this，但是原函数不会受到影响
        // 构造函数的时候，this指向的是新创建的对象，执行self时，会在新对象上添加属性或方法
        return self.apply(this instanceof F ? this : context,args.concat(myArgs))
    }
    // 空函数做原型的中转，避免操作myBind的prototype，影响到原有函数的prototype
    F.prototype = self.prototype
    myBind.prototype = new F()
    return myBind
}
```
