# 居中

## 垂直居中

### line-height

适用于单行的行内元素，将元素的height和line-height设置成相同的值，多行内容会导致显示错位。

### 伪类选择器+vertical-align

在父元素的伪类元素（before、after）中，设置高度100%，vertical-align 设置为middle

### calc

设置子元素的top值为calc(50%-height/2px)

### transform

### flex

## 水平居中

### text-align

行内元素

### margin

auto
定宽的块级元素

### flex布局

justify-content

## position定位

- static 正常定位方式，z-index,top等属性不生效
- relative 相对于自身原本的定位。
- absolute 元素移出正常文档流，并不为元素预留空间。相对于最近的非static元素进行偏移。
- fixed 元素移出正常文档流，并不为元素预留空间，相对于屏幕视口。
- sticky 相对于最近的滚动元素进行偏移。

## 三角形

```css
.top {
    border: 50px solid transparent;
    border-top: 50px solid red;
}
```

BFC
