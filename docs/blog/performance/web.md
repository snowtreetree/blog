# 性能优化

## 减少HTTP请求

- CSS/JS 合并打包（webpack 相关），tree-shaking
- 小图标用iconfont，便于设置大小、颜色等。
- Base64格式的图片。（小图片，有兼容性问题）。
- 使用CDN
- 脚本动态加载，比如地图SDK文件，动态创建script标签去获取。
- [异步加载async/defer]('../js/script.md')，[预加载]('../CSS3/link.md')
- 图片懒加载

## 减少静态资源的体积

- 图片压缩。蓝湖、tinypng都可以压缩图片。
- CSS 层级不建议写太深，一般三级左右即可。
- 开启压缩。([nginx]('../nginx/base.md)可以通过设置gzip on实现)

## 使用缓存

- [协商缓存和强缓存]('../http/cache.md')