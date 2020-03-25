# bind、call、apply 实现

## call

``` js

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
    // 执行
    var value = eval(`context.fn(${args})`)
    delete context.fn
    return value
}

```

## apply

``` js
Function.prototype.myApply = function (context,arr) {
    // arr 表示参数为数组

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
