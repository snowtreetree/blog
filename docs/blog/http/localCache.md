# 本地缓存

主要分为Cookie，WebStroage(LocalStorage、SessionStorage)，IndexDB。

## Cookie

主要是弥补HTTP无状态的缺陷，不会跨域。

- 4K左右
- 性能缺陷，不管是否需要，都会默认带上
- 安全缺陷，纯文本传输。可以通过设置HttpOnly，避免JS脚本直接操作

## LocalStorage

同域名，会存储相关的LocalStorage。

- 5M左右，持久存储
- 默认不参与请求
- 接口封装方便，setItem/getItem

## SessionStorage

类似于LocalStorage，但是会话关闭就会清除

## IndexDB

运行在浏览器中的非关系型数据库，理论上没有存储上限。