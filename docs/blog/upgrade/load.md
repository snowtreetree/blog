# 项目优化

## 首屏加载优化

- Vue-Router路由懒加载（Webpack代码切割）
- CDN加速，通用的库从vendor中抽离。（Dll）
- Nginx 的gzip压缩
- Vue异步组件
- 服务端渲染（SSR）
- UI库按需加载
- Webpack开启gzip压缩
- Service Worker 缓存文件
- 使用link标签的rel属性设置   prefetch（这段资源将会在未来某个导航或者功能要用到，但是本资源的下载顺序权重比较低，prefetch通常用于加速下一次导航）、preload（preload将会把资源得下载顺序权重提高，使得关键数据提前下载好，优化页面打开速度）
