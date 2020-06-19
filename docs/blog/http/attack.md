# XSS 和 CSRF

## XSS

Cross-Site Scripting，跨站脚本攻击，一种代码注入攻击。常见的就是在论坛发帖中，发布一段 JavaScript 代码，如果代码内容有请求外部服务器或者在其他用户的浏览器上执行，从而获取用的敏感信息，Cookie，sessionID 等信息，就称为 XSS。

### 常见注入方式

- 在 HTML 中内嵌的文本中，恶意内容以 script 标签注入
- 在 style 中，包含类似 url("javascript:xxx")的可执行代码
- 在标签的 href、src 属性中，加入 javascript: 等可执行代码
- ...

### XSS 攻击分类

#### 存储型

恶意代码在数据里面

- 攻击者将代码提交到目标网站数据库
- 用户打开目标网站，网站服务端将恶意代码从数据库中取出，传输到用户浏览器
- 用户浏览器解析执行，恶意代码也会执行
- 恶意代码将用户数据发送到攻击者网站，或者冒充用户的行为，执行某些操作

#### 反射型

恶意代码在 URL 里面，比如有些 redirect_to 跳转参数。或者 redirect_to=javascript:alert('XSS')

- 攻击者构造出特殊的 URL，其中包含恶意代码或行为
- 用户打开恶意代码，浏览器解析执行
- 恶意代码将用户数据发送到攻击者网站，或者冒充用户的行为，执行某些操作

#### DOM 型

- 攻击者构造出特殊的 URL，其中包含恶意代码。
- 用户打开带有恶意代码的 URL。
- 用户浏览器接收到响应后解析执行，前端 JavaScript - 取出 URL 中的恶意代码并执行。
- 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充- 用户的行为，调用目标网站接口执行攻击者指定的操作。

DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞

### 预防 XSS

- 纯前端渲染
  - 浏览器选加载一个静态 HTML，HTML 中不包含业务数据
  - 执行 HTML 中的 JavaScript
  - 通过 Ajax 加载业务数据，调用 DOM API 进行更新页面
- HTML 转义

- 预防 DOM 型攻击

  - 减少使用 v-html/dangerouslySetInnerHTML、innerHTML、outerHTML、document.write 功能

- CSP
  - 禁止加载外域代码
  - 禁止外域提交，避免数据泄露
  - 禁止内联脚本执行
  - 禁止未授权脚本执行
- Http-only Cookie ，禁止通过 JavaScript 代码获取 Cookie 信息


## CSRF

Cross-site request forgery，跨站伪造请求。是一种冒充用户发送请求的。

- 常见类型 - GET 类型

  ```js
  <img src="http://bank.example/withdraw?amount=10000&for=hacker" >
  ```

- POST 类型，自动提交一个表单

  ```js
  <form action="http://bank.example/withdraw" method=POST>
  <input type="hidden" name="account" value="xiaoming" />
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="for" value="hacker" />
  </form>
  <script> document.forms[0].submit(); </script>
    ```

 - 其他网站，增加可点击连接，跳转到目标网站

### 预防
- 验证码
- 同源检测，Origin Header，Refer Header
- Token，服务器随机生成，每次提交时带上token信息
- Samesite
    - Strict，a.com中发起对b.com的请求，不会带上cookie信息
    - Lax，当在a.com页面中改变了页面地址或者新开了页面到b.com，可以带上cookie信息

## 两者区别

- CSRF：用户需要先登录，取获取 Cookie。XSS：不需要登录

- CSRF 利用网站 A 的漏洞去请求 A 网站的 API。XSS：注入代码到 A 网站，执行 JavaScript 代码，篡改内容


## 其他

### DDoS（distributed denial-of-service attack）/ 洪水攻击

模仿用户/或者控制许多`僵尸`计算机，向目标服务器发起大量请求。服务器无法区分正常用户和黑客攻击，只能“照单全收”，这样就会挤占正常用户应有的资源。

### SQL注入

利用服务器的字符串拼接形成SQL语句的漏洞，构造出非正常的SQL语句，获取数据库内部的敏感信息。

### HTTP头注入

在请求头里面加入恶意代码或数据，服务端程序如果解析不当，就会执行恶意代码。