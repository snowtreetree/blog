# webpack

静态模块打包器，可以用它管理项目中的模块依赖，并编译出模块所需的静态文件。处理应用程序时，递归构建一个依赖关系图。

## 常用配置

### entry

打包入口

### output

打包出口

### devtool

配置source-map相关

### module

主要用来配置loader相关。

loader是一个转换器，将A文件进行编译成B文件。

#### 常见loader

- 样式：style-loader、css-loader、less-loader、postcss-loader（样式自动补全）
- 文件：raw-loader、file-loader、url-loader  
    raw-loader 将文件以字符串形式返回  
    file-loader 将文件复制到指定目录，并生成文件资源的URL  
    url-loader 类似于file-loader，可以将小于配置limit大小的文件转换成Data Url的方式，减少请求
- 编译：babel-loader、ts-loader、vue-loader  
    将其他语言装换成js语言或编译下一代语言。

- 校验：mocha-loader、eslint-loader

### resolve

设置模块如何解析。

- alias 配置别名
- extensions 按顺序解析文件后缀名

### plugins

通过钩子函数参与到整个构建周期，构建过程中执行某些特定的任务，改变输出结果。

#### 常见plugins

- html-webpack-plugin 根据模板生成HTML文件，并自动应用CSS和JS静态文件。
- mini-css-extract-plugin 抽离js文件中引用的CSS文件。
- DefinePlugin 编译时配置全局变量
- HotModuleReplacementPlugin 热更新
- webpack-bundle-analyzer bundle文件分析工具
- happypack 通过多进程模型，加速代码构建
- clean-webpack-plugin 目录清理

### externals

防止将某些import的包打包到bundle中，而是在运行时从外部获取。

常见的是使用CDN。

[使用文档](https://webpack.docschina.org/configuration/externals/)

## proxyTable 原理

浏览器是禁止跨域的，服务端并不禁止跨域，所以浏览器可以发给自己的服务端，然后自己的服务端再转发给要跨域的服务端，做一层代理。  

使用http-proxy-middleware中间件可以实现，http-proxy-middleware内部用的http-proxy。

## 优化打包速度

### 高版本的Webpack

### 多进程/多实例打包

- happypack
- thread-loader

### 压缩代码

- webpack-paralle-uglify-plugin
- terser-webpack-plugin

### 图片压缩

- image-webpack-loader

### 公共资源

splitchunks

### 缓存

cache-loader或hard-source-webpack-loader

### tree-shaking

依赖于es6语法。检测到未使用文件中未使用的部分，打包时进行删除。

### scope-hoisting

## 参考

[「吐血整理」再来一打Webpack面试题](https://juejin.im/post/6844904094281236487)
