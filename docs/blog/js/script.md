# script

HTML中用于嵌入或引用可执行脚本。默认并行请求，串行执行。

## attribute

- src
- type
- nomodule
- async
- defer
- crossorigin
- integrity
- referrerpolicy

### type

默认为空。可设置为module（模块）。

``` html
<script type="module">
     import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
     console.log(Vue)
</script>
```
兼容性：  
<img :src="$withBase('/js/script_module.png')" alt="foo">

### src

外部脚本地址信息。

### nomodule

面向旧版本浏览器，在支持es2015 module中的浏览器中不会加载。对于Vue项目中[vue-cli](https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F)有相关的配置信息。

### async、defer

定义脚本怎么执行。  
设置了async(IE9以下不支持)，对于普通的脚本，脚本会并行下载，执行的时候并不会串行，只要加载好了就会执行。对于模块脚本，如果存在 async 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。  
设置了defer，会并行下载，但是会在页面解析完成之后执行，但在DOMContentLoaded之前。

## crossorigin

获取跨域脚本的报错信息。通常需要和Access-Control-Allow-Origin配套使用。
- anonymous 会在请求头里面带上Origin参数，但是不会带其他认证信息
- use-credentials 跨域时会带上认证信息（cookie等）
