# 重绘和回流

:::tip
浏览器渲染过程

- 处理HTML标记，构建DOM树
- 处理CSS标记，构建CSSOM树
- 将DOM和CSSDOM合并成渲染树
- 根据渲染树完成布局，并计算每个节点的集合信息
- 将节点绘制到屏幕上
:::
![过程](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png?hl=zh-cn)

## 重绘

由于节点的属性发生改变或样式变化影响布局的，称为重绘，例如visibility，color，bgcolor,outline 等。

## 回流（reflow）

前面我们通过构造渲染树，我们将可见DOM节点以及它对应的样式结合起来，可是我们还需要计算它们在设备视口(viewport)内的确切位置和大小，这个计算的阶段就是回流。

- 改变font-size，font-family
- 改变元素内外边距
- 通过JS改变CSS样式
- 通过JS获取DOM元素的位置相关属性
- 改变窗口大小

## 优化

- 减少重绘和回流，或者使用重绘代替回流
- 批量修改（先脱离文档流，然后操作，再恢复）
- css3硬件加速（transform、opacity、filters这些动画不会引起回流重绘）
- 避免使用table
- 避免使用CSS表达式
- 频繁操作样式，可以将样式一次性赋值
- DOM缓存

## 应用

- 拖拽实现，通常可以使用postition: absolute实现，可以使用transform: translate进行优化。