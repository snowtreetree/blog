# 状态码

出现在响应行中。状态码的实际范围是100~599。

```js
HTTP version (space) Status Code (space) reasons
```

## 状态码类型

- 1xx，提示消息，表示目前协议是处理的中间状态，还需要后续操作。
- 2xx，成功。
- 3xx，重定向。304是缓存相关内容。
- 4xx，客户端错误。
- 5xx，服务器在处理请求时发生内部错误。

## 1xx

很少遇到

## 2xx

`200 Ok` 成功返回。

`204 No Content` 请求成功，但是没有body数据。

`206 Partial Content` 分块下载或断点续传的基础。

## 3xx

`301 Moved Permanently` 永久重定向，浏览器会做缓存，后面再次请求这个地址的时候，会直接重定向到重定向的地址。

`302` 临时重定向。

`304 Not Modified` 用于If-Modified-Since等条件的请求，表示资源未修改，用于缓存控制。

## 4xx

`400 Bad Request` 请求报文错误，请求数据格式或者确实参数等。

`403 Forbidden` 服务器禁止访问资源。

`404 Not Found` 资源未找见。

`405 Method Not Allow` 请求方式不允许。

## 5xx

`500 Internal Server Error` 服务器出错。

`501 Not Implemented` 客户端请求的功能不支持。

`502 Bad Gateway` 服务器作为网关或代理时返回的错误码，表示代理服务器正常，但是被代理的服务器异常。

`503 Service Unavaliable` 服务器正忙。