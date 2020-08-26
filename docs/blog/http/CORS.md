# CORS - 跨域资源共享

Cross-Origin Resource Shareing

是一个系统，由一系列的HTTP头组成，浏览器根据这些HTTP头信息决定是否阻止JS跨域请求的响应。

## 常见CORS相关HTTP头信息

- Access-Control-Allow-Origin，请求资源共享给哪些域名，常见为*，或者根据请求域名设置。
- Access-Control-Allow-Credentials
- Access-Control-Allow-Methods，常见HEADS，GET，POST
- Access-Control-Request-Method
- Origin

## 跨域

当A应用访问`不同域名`，`不同协议`，`不同端口`的资源时，资源就会发起一个跨域请求。XMLHttpRequest和Fetch API需要遵循同源策略，在使用这两个API的时候，需要访问同源下的资源，或者响应头内配置了合适的响应头信息。

::: tips

同源策略限制了以下行为：

- Cookie、LocalStorage、IndexDB的获取
- AJAX和fetch请求不能发送，需配置响应头信息 
:::

## 跨域解决方案

### NGINX

常见的解决方案，配置转发。

### JSONP

`json with padding(填充)`

js、css、图片资源的请求不会出现跨域限制的问题，就可以通过创建一个script标签，url地址为对应的请求地址。因此只支持get请求。

### CORS

服务端配置响应头信息

### node中间层

## 不同域名信息共享

- postMessage(data,origin)

- document.domain，子域名的domain设置为主域名下

- 

## 参考

[CORS - MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS)

[jsonp 跨域原理分析](https://segmentfault.com/a/1190000009773724)

[前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)