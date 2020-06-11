# HTTP - body

## 数据类型与编码

TCP/IP 协议中，传输的数据基本上是header+body的形式传输。但是TCP或者UDP并不关心传输的数据是什么，只负责数据发送到接收方。

HTTP协议则不同，他还要告诉上层应用是什么数据，比如浏览器中发起请求，浏览器要知道数据的格式才能去处理。

在HTTP协议中，使用MIME type来标记body中的数据类型。

::: tip

MIME（Multipurpose Internet Mail Extensions）,`多用途互联网邮件拓展`，刚开始是用在邮件中的。

:::