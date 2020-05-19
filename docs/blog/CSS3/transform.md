# Transform

对元素进行移动、缩放、转动、拉长、拉伸

## translate

指定元素移动位置，参数为left，top

```css
.test1 {
    transform: translate(50px,100px);
}
```

## rotate

指定元素顺时针旋转角度，可以为负值。

```css
.test1 {
    transform: rotate(30deg);
}
```

## scale

指定元素的尺寸增加或减少，参数为X轴转换尺寸，Y轴转换尺寸

```css
.test1 {
    transform: scale(2,4);;
}
```

- CSS中的1px并不等于移动设备的1px。设备像素比，devicePixelRatio = 物理像素 / 独立像素。[使用Flexible实现手淘H5页面的终端适配 ](https://github.com/amfe/article/issues/17)

```css
.scale-1px{
    position: relative;
    margin-bottom: 20px;
    border:none;
}

.scale-1px:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

```

## skew

斜切

## matrix  所有上述方法组合到一起的属性

## rotateX、rotateY，元素围绕X轴/Y轴以给定的度数进行旋转