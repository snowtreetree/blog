# Webpack V3 To V4

## 升级

### entry

### webpack cli

使用Webpack cli指令，需单独安装。

### mode

#### production

- 默认提供尽可能多的优化，比如代码压缩/作用域提升等。
- 不支持watching
- process.env.NODE_ENV 不需要再定义，默认是production

#### development

- 优化了增量构建速度和开发体验。
- process.env.NODE_ENV 不需要再定义，默认是development

### import 动态导入

### 常用依赖升级

- html-webpack-plugin
- extract-text-webpack-plugin => mini-css-extract-plugin

### optimization 

#### 公共代码提取

CommonsChunkPlugin 替换成optimization.splitChunks

自动分割条件

- 新代码块可以被共享引用，或者是node_modoules下的依赖包
- 新代码块大于30kb
- 按需加载的代码块，并行请求最大数小于等于6
- 初始加载的代码块，并行请求数小于等于4

#### 其他

- minimize 默认使用 terser-webpack-plugin 压缩代码，可自定义。
- splitChunks

[使用文档](https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks)

## 增加内容

### 依赖

- speed-measure-webpack-plugin

测定插件和loader花费时间。

- hard-source-webpack-plugin

为模块提供中间缓存，首次构建可能时间会有增加，后续配置、依赖相关没有更改，会直接采用缓存。

常用设置：maxAge、cacheDirectory、configHash、environmentHash。
