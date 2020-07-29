# 模块化

:::tip
公共代码的抽离
:::

## AMD

使用reqiureJs 编写模块，支持异步和浏览器环境。

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

nodejs中的模块化，不支持异步加载。

```js
var path = require('path')
```

## UMD

兼容AMD和CommonJs的模块化语法，

```js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // 全局变量
    root.returnExports = factory(root.jQuery);
  }
}(this, function ($) {
  // ...
}));

```

## ES Modules

ES6 引入的模块化，支持import 来引入另一个 js，需要babel和Webpack支持才能使用。
