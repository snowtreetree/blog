# NGINX

:::tip  
高性能反向代理服务器。

- 正向代理：客户端的，客户端到服务器之间做了一层代理，服务器并不知道自己受到的请求是代理的还是真实的访问。（比如SSR）

- 反向代理：服务端的，客户端的请求发送到服务器之后，服务器将请求转发到其他服务器或其他操作。  

:::

## 常见配置

```json
// nginx.conf中
// 事件处理模块
events { 
    // worker_connections 工作进程的最大连接数
    worker_connections 1024 
}
//  http可以嵌套多个server服务，配置代理，缓存，请求/报错日志等
http 
{
    // 开启gzip
    gzip on;
    // 开启压缩的最低HTTP版本
    gzip_http_version 1.1;
    // 压缩级别 1-9
    gzip_comp_level 1;
    // 压缩文件
    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml;
    // 虚拟主机的相关参数
    server
    { 
        // 监听端口，SSL为443
        listen 443 ssl;
        // 域名信息
        server_name buzhifangxue.com
        root html
        // 配置请求路由
        location / {
            // 配置HTML文件
          root /www/buzhi;
          index index.html;
            //   响应头信息
          add_header Cache-Control no-cache;
          try_files $uri $uri/ /index.html;
        }
        // 
        location ~* /api/
        {
            // 配置接口的转发
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_pass http://bapi-dev.ankerjiedian.com;
            add_header Access-Control-Allow-Credentials true;
        }
     }

    server
    {
        ...
    }

}
```