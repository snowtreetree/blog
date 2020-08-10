# 模块化

:::tip
公共代码的抽离
:::

## AMD

异步模块定义，是为浏览器环境设计。

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

nodejs中的模块化规范，同步加载。

引入模块资源，都是在服务器上，所以不存在阻塞或者时间长的问题。

但是如果浏览器里面也使用同步加载，会导致等待时间较长。

```js
var path = require('path')
```

## UMD

`Universal Module Definition` 通用模块定义规范，兼容AMD和CommonJs的模块化语法，回去判断exports、define方法是否存在，从而决定具体使用哪一种规范。

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

## ES Module

ES6 引入的模块化，支持import 来引入另一个 js，需要babel和Webpack支持才能使用。

## Reference

[Webpack 打包太慢？来试试 Bundleless 吧](https://developer.aliyun.com/article/768060)

[JavaScript 模块化的历史进程](https://mp.weixin.qq.com/s/W4pbh5ivGu-RGkz1fdDqwQ)