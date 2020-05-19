# 边框

## border-radius

- 简写属性， border-top-left-radius、border-top-right-radius、border-bottom-right-radius
- 可用像素、百分比

```css
div {
    height: 100px;
    width: 100px;
    background-color: aquamarine;
}
.test1 {
     border-raduis: 10px 20px 30px 40px;
}
.test2 {
   border-raduis: 50% 20%;
}
```

<img :src="$withBase('/border1.jpg')" alt="foo">
<br>
<img :src="$withBase('/border2.jpg')" alt="foo">

## box-shadow

向元素添加阴影效果
- 参数分别为 (阴影方向，inset：向内) ,X轴偏移量，Y轴偏移量，（阴影模糊半径，阴影扩散半径）阴影颜色

```css
.test1 {
    box-shadow: inset 12px 12px 20px 10px aquamarine
}
```
<img :src="$withBase('/box-shadow.jpg')" alt="foo">