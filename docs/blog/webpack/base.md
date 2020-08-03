# webpack

静态模块打包器。处理应用程序时，递归构建一个依赖关系图。

## 常用配置

### entry

打包入口

### output

打包出口

### devtool

配置source-map相关

### module

主要用来配置loader相关。

它是一个转换器，将A文件进行编译成B文件。

#### 常见loader

- 样式：style-loader、css-loader、less-loader
- 文件：raw-loader、file-loader、url-loader  
    raw-loader 将文件以字符串形式返回  
    file-loader 将文件复制到指定目录，并生成文件资源的URL  
    url-loader 可以将小于配置limit大小的文件转换成Data Url的方式，减少请求
- 编译：babel-loader、ts-loader、vue-loader  
    将其他语言装换成js语言或编译下一代语言。

- 校验：mocha-loader、eslint-loader

### resolve

设置模块如何解析。

- alias 配置别名
- extensions 按顺序解析文件后缀名

### plugins

通过钩子可以参与到整个构建的过程，构建过程中执行某些特定的任务。

#### 常见plugins

- html-webpack-plugin 根据模板生成HTML文件，并自动应用CSS和JS静态文件。
- mini-css-extract-plugin 抽离js文件中引用的CSS文件。
- DefinePlugin 编译时配置全局变量
- HotModuleReplacementPlugin 热更新
- webpack-bundle-analyzer bundle文件分析工具
- happypack 通过多进程模型，加速代码构建

### externals

防止将某些import的包打包到bundle中，而是在运行时从外部获取。

常见的是使用CDN。

[使用文档](https://webpack.docschina.org/configuration/externals/)