# 模块化
:::tip
公共代码的抽离
:::

## AMD
使用reqiureJs 编写模块
```js
define('./module',function(code){
    // code 是module的返回内容
})
```

## CMD
使用seaJs 编写模块，支持动态引入
```js
define(function(require,exports,module){
    var moduleCode = require('./module')
})
```

## CommonJS 
nodejs中的模块化
```js
var path = require('path')
```

## UMD
兼容AMD和CommonJs的模块化语法

## ES Modules
ES6 引入的模块化，支持import 来引入另一个 js 