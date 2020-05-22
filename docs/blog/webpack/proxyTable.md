# proxyTable 原理

浏览器是禁止跨域的，服务端并不禁止跨域，所以浏览器可以发给自己的服务端，然后自己的服务端再转发给要跨域的服务端，做一层代理。  

使用http-proxy-middleware中间件可以实现，http-proxy-middleware内部用的http-proxy。
 