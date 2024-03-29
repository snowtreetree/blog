# 缓存

## 缓存类型

浏览器中的缓存分为两种情况，一种是需要发送 HTTP 请求，一种是不需要发送请求（缓存一般是针对 GET 请求）。

缓存又分为`私有缓存`、`公有缓存`（cache-control）。

## 私有缓存

### 强缓存

不需要发送请求。对应字段 Expires(HTTP/1.0)，Cache-Control(HTTP/1.1)。

#### Expires（过期时间）

返回的响应头中，内容是时间节点，告诉浏览器在 xxx 时间点之前的请求，可以直接从缓存里面获取，但是服务器和客户端的时间可能不一致，导致缓存失效或者未及时更新的问题。

#### Cache-Control（优先级高于 Expires）

- max-age： 过期时长，单位为秒
- no-cache： `跳过当前强缓存，进入协商缓存`
- no-store： 不缓存
- s-maxage： 针对代理服务器的缓存时间
- must-revalidate： 缓存不过期可以继续使用，过期了则去服务器验证
- private：私有缓存，单独用户，对应浏览器，拒绝中间人缓存，比如 CDN 和代理
- public: 共享缓存，多个用户缓存
- max-stale：X(seconds) 客户端愿意接收一个已过期 X 秒的资源
- min-fresh：X(seconds) 客户端接收一个在 X 秒后不会过期的资源

### 协商缓存

强制缓存失效后，服务器根据请求头中的 Etag 和 Last-Modified，告诉客户端是否启动缓存。

#### Last-Modified(响应)/If-Modified-Since（请求）

最后修改时间。

- 已删除资源返回 404，本地缓存也将会被删除
- 如果请求头的时间小于修改时间，返回新的资源
- 否则返回 304，浏览器使用缓存

#### Etag（响应）/If-None-Match（请求）

根据内容生成，文件唯一标识。当文件更改的内容不影响用户看到的信息，或是其他一些无关紧要的信息，比如增加了空格、注释等，Modified 信息会发生变化。

- 两者不一样，返回新的资源
- 否则采用缓存

## 缓存位置

- Service Worker(PWA 实现机制)
- Memory Cache
  内存缓存。效率最快，但是存活时间较短，渲染进程结束后，内存缓存就不存在了。
- Disk Cache
  存储在磁盘中的缓存，比内存缓存慢，但是存储容量和时间较长

  - 较大文件的 JS、CSS 文件会放到磁盘，反之放到内存缓存
  - 内容使用率较高的时候，文件进到磁盘

- Push Cache
  - 推送缓存。应用较少，属于 HTTP2 相关的内容

## 缓存代理

HTTP 的服务器缓存功能主要由代理服务器来实现。
