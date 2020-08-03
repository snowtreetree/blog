# 配置（项目中使用）

## 基本

### webpack-cli

用于在命令行中运行Webpack。 npx webpack

## 配置

### mode

Webpack使用响应模式的内置优化。development，production，none。

[使用文档](https://webpack.docschina.org/configuration/mode/#mode-development)

### devtool

控制如何生成`source-map`

- source map

    信息文件，储存着代码打包前的位置信息。

### 开发服务器

常用webpack-dev-server 或者 webpack-dev-moddleware。

webpack-dev-server 基于 webpack-dev-moddleware。

 webpack-dev-moddleware常配合Express使用。

[使用文档](https://webpack.docschina.org/configuration/devtool/)

### optimization

SplitChunksPlugin

### 预获取/预加载模块(prefetch/preload module)

- prefetch(预获取)：将来某些导航下可能需要的资源
- preload(预加载)：当前导航下可能需要资源

```js
import(/* webpackPrefetch: true */ 'LoginModal');

// 生成 <link rel="prefetch" href="login-modal-chunk.js">
```

#### 区别

- preload 会在父chunk加载时，并行下载，prefetch会在父chunk加载结束后开始加载。
- preload 中优先级，立即下载。prefetch 空闲时下载。
- 浏览器支持程度不同

## 插件

### html-webpack-plugin

生成HTML模板，自动注入CSS和JS静态文件。

chunks + entry（多入口），可用来配置多页面打包。比如区分微信，支付宝环境等。

[使用文档](https://github.com/jantimon/html-webpack-plugin#options)


