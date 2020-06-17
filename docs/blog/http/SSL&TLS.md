# SSL/TLS

HTTPS是HTTP建立在SSL/TLS安全协议上的。通过SSL证书验证服务的身份，并为浏览器和服务器之间的通信进行加密。采用对称加密、非对称加密、身份认证等技术进行混合加密进行传输。属于OSI中的第五层（安全层），默认端口是443。与普通的发送HTTP请求相比，多了一个握手的过程，HTTPS需要在TCP上建立安全链接之后，才能收发HTTP报文。

::: tip

SSL（Secure Sockets Layer）：安全套接字层，TLS（Transport Layer Security）：传输安全层，前身是SSL。

:::

## TLS 组成

TLS包含了几个子协议，每个子协议各自负责不同的模块。

### 记录协议（？）

规定了TLS收发数据的基本单位：记录（record）。所有其他的协议都需要通过记录协议发出。

### 警报协议

向对方发出警报信息。比如protocol_version是对版本的限制，bad_certificate是证书有问题，收到的一方可以选择继续或终止。

### 握手协议

协商TLS版本号，随机数，密码套件等信息，然后交换证书和秘钥参数，最终双方协商得到会话秘钥，用于后续的混合加密系统。

### 变更密码规范协议

告诉对方，后续数据都用加密保护。


## 握手流程

1、客户端通过URL访问服务器建立SSL/TLS连接，将协议版本号，生成一个随机数（client_random），以及支持的加密方法发送到服务器  

```js
Handshake Protocol: Client Hello
    Version: TLS 1.2 (0x0303)
    Random: 1cbf803321fd2623408dfe…
    Cipher Suites (17 suites)
        Cipher Suite: TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f)
        Cipher Suite: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030)
```

2、服务端收到请求，确认加密算法，并生成一个serve_random，以及网站支持的证书（包含公钥等信息）发送到客户端  

```js
Handshake Protocol: Server Hello
    Version: TLS 1.2 (0x0303)
    Random: 0e6320f21bae50842e96…
    Cipher Suite: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030)

```

3、客户端收到证书后进行，得到服务端的信息及公钥，协商安全等级（信息加密的等级）。  
4、验证成功后，生成一个新的随机数Premaster_secret，经过公钥加密后，发给服务器
5、服务器收到Premaster_secret后，私钥解密
6、后面根据约定好的加密算法，使用client_random、serve_random、Premaster_secret生成对话秘钥，进行整个对话

:::tip  
对称加密：加解密的秘钥相同
非对称加密：公钥加密，私钥解密
:::

## 优缺点

### HTTP中存在问题（HTTPS解决的问题）

- 请求明文，容易被截取窃听
- 数据完整性未校验，容易被篡改
- 没有验证对方身份，存在冒充风险

### HTTPS的缺点

- 多次握手，耗时
- SSL证书需要花钱
- 涉及的安全算法消耗CPU资源


## 数字签名和证书（？）

### 摘要算法

用来保证数据的完整性。通过MD5、SHA-2等算法，对信息进行加密，然后跟着原文发送到服务器，服务器使用相同的算法，对原文进行摘要计算，判断得到的信息是否和传输过来的摘要信息一致，从而判断消息是否被修改过。


### 数字签名

原理：使用私钥进行加密，公钥进行解密。由于非对称加密的效率较低，所以私钥只加密摘要信息。签名和公钥完全公开，但是经过私钥加密的，只能通过对应的公钥进行解密。通过公钥解密后，再与原文进行对比验证完整性，就可以确定消息确实是正确的。
CA（Certificate Authority ，证书认证机构），对网站的公钥签名，保证公钥的可信性。

### TLS 兼容

