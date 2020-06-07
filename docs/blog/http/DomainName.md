# 域名

## 域名内容

www.google.com 域名通过`.`进行分割，层次关系从左往右依次降低。com 是顶级域名，google是二级域名，www是主机名，用来表示主机用途。主机名主要是为了区分业务。

在NGINX的配置中，域名可以用来标识虚拟主机，决定哪个虚拟主机来对外提供服务。

## 域名解析

DNS的核心系统是一个三层的树状、分布式服务。

1. 根域名服务器（Root DNS Server），管理顶级域名服务器，返回`com`，`cn`，`net`等顶级域名服务器的IP地址。
2. 顶级域名服务器（Top-level DNS Sever），管理个子域名下的权威域名服务器。比如com顶级域名服务器可以返回apple.com域名服务器的IP地址。
3. 权威域名服务器（Authoritative DNS Server），管理自己域名下主机的IP地址，比如apple.com权威域名服务器可以返回www.apple.com的IP地址。

## DNS缓存

## DNS查询

1. 浏览器缓存
2. 操作系统缓存
3. hosts
4. DNS