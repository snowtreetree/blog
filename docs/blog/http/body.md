# HTTP - body

## 数据类型与编码

TCP/IP 协议中，传输的数据基本上是 header+body 的形式传输。但是 TCP 或者 UDP 并不关心传输的数据是什么，只负责数据发送到接收方。

HTTP 协议则不同，他还要告诉上层应用是什么数据，比如浏览器中发起请求，浏览器要知道数据的格式才能去处理。

在 HTTP 协议中，使用 MIME type 来标记 body 中的数据类型。

::: tip

MIME（Multipurpose Internet Mail Extensions）,`多用途互联网邮件拓展`，刚开始是用在邮件中的。

:::

## HTTP 中常遇到的类别

- text，文本格式的可读数据。text/html，text/css，text、plain 纯文本。。。

- image，图像文件。image/gif，image/jpeg。。。

- audio/video，音频。audio/mpeg，video/mp4。。。

- application，数据格式不固定。application/json，application/JavaScript，application/pdf 等。

除了 MIME，文件在传输的时候，还会对文件进行压缩，Encoding type 用来描述编码格式。

- gzip，GNU zip 压缩格式。
- deflate，zlib 压缩格式。
- br，专门为 HTTP 优化的新压缩算法（Brotli）

## 数据类型使用的头字段

在客户端中，使用 Accept 头告诉服务器自己能够处理的数据类型和压缩方式。Accept，Accept-Encoding。

```js
Accept: text/html,application/xml,image/webp,image/png
Content-Type: text/html
```

```js
Accept-Encoding: gzip, deflate, br
Content-Encoding: gzip
```

## 语言类型

每个国家或者地区，使用的语言不同，为了让浏览器能够正常处理不同的语言，HTTP 采用了和数据类型类似的方案，引入了语言类型和字符集。

- 语言类型就是人们使用的自然语言，比如 en-US，zh-CN

```js
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7
Content-Type: text/html; charset=utf-8
// q标识权重优先级，最大为1，最小为0.01，默认为1，设为0表示拒绝。可设置到Accept、Accept-Language、Accept-Encoding中
//  zh-CN,zh 权重为 1，en 为 0.9，ja 为 0.8，任意 Accept-Language 为 0.7。
```

- 字符集，是一些符号类别的内容，每个地区使用的也有些差别，出现过 ASCII、GBK 等，后来出现了 Unicode 和 UTF-8，把所有的语言都归纳到一种方案里。

```js
Accept-Charset: gbk, utf-8
Content-Type: text/html; charset=utf-8
```
