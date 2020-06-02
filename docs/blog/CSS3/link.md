# link

链接外部文件（通常为样式，还有一些预加载）

## attribute

- href 
- media
- type
- rel

### href 

文档地址

### media

媒介查询

### type 

文件类型

### rel

文档与被链接文档之间的关系。常用preload，prefetch。

- preload。告诉浏览器有些资源未来可能会用到，但是什么时候下载交给浏览器处理，配合as使用，as为style、script、font等，不设置的话，文件可能会被加载两次。

- prefetch。告诉浏览器加载下一页面可能会用到的资源，加速下一个页面的加载速度。

- dns-prefetch。[dns预解析](https://zhuanlan.zhihu.com/p/22362198)，提高网站访问速度。
:::tip  
HTTPS域名下的a标签不会预解析，需设置
```html
<meta http-equiv="x-dns-prefetch-control" content="on">
```
:::