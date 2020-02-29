# scroll相关

## 页面滚动相关事件及属性简介

### [window对象下](#window)

[scrollX](#scrollX)

&emsp;&emsp;现常用pageXOffset，页面水平方向滚动的像素值。IE<9两个属性均不支持，兼容性代码:

```js
const x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
```

document.documentElement 是文档的根元素HTML中指&lt;html&gt;。

[scrollY](#scrollY)

&emsp;&emsp;现常用pageYOffset，页面垂直方向滚动的元素。IE<9两个属性均不支持，兼容性代码:

```js
const y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
```  

[scrollTo](#scrollTo)

&emsp;&emsp;绝对滚动。滚动至文档中的某个位置，同window.scroll。

```js
window.scrollTo(x,y)
// x为横坐标，y为纵坐标，瞬间滚动
window.scrollTo(options)
// options:{x,y,behavior} left为横坐标，top为纵坐标，behavior滚动效果,smooth平滑滚动，instant瞬间滚动，auto默认（瞬间滚动）
```

[scrollBy](#scrollBy)

&emsp;&emsp;相对滚动。按照指定滚动量滚动
相对滚动window.scrollByPages，window.scrollByLines，均为非标准

```js
window.scrollBy(x,y)
// x为横坐标，y为纵坐标，瞬间滚动
window.scrollBy(options)
// options:{x,y,behavior} left为横坐标，top为纵坐标，behavior滚动效果,smooth平滑滚动，instant瞬间滚动，auto默认（瞬间滚动）
```

### [Element对象下](#Element)

[clientWidth](#clientWidth)

&emsp;&emsp;元素的内部宽度,整数。包括内边距，不包括垂直滚动条、边框和外边距。
![clientWidth](https://tva1.sinaimg.cn/large/0082zybpgy1gca727l3aij30bf06vaa2.jpg)

[scrollWidth](#scrollWidth)

&emsp;&emsp;元素包含溢出内容的宽度，包括内边距，也包括::before和::after伪元素，不包括垂直滚动条、边框和外边距。

[clientHeightclientHeightclientWidth)

&emsp;&emsp;元素的内部,整数。包括内边距，不包括垂直滚动条、边框和外边距。

[scrollHeight](#scrollHeight)

&emsp;&emsp;元素包含溢出内容的高度，包括内边距，也包括::before和::after伪元素，不包括垂直滚动条、边框和外边距。

[scrollLeft](#scrollLeft)

&emsp;&emsp;元素滚动条到左边滚动的距离。

[offsetHeight](#offsetHeight)

&emsp;&emsp;元素包含内边距和边框的高度，scrollHeight+border+padding。

[scrollTop](#scrollTop)

&emsp;&emsp;元素滚动条到容器顶部滚动的距离。

[scrollIntoView](#scrollIntoView)

&emsp;&emsp;元素滚动到当前视口

```js
scrollIntoView(boolean)
scrollIntoView(options)
// 为boolean时，true代表options的{block: "start", inline: "nearest"}，false为{block: "end", inline: "nearest"}
// 为options时，behavior为动画，auto和smooth。block定义垂直方向的对齐，start,end,center,nearest。inline为水平方向start,end,center,nearest。
```

[scrollIntoViewIfNeeded](#scrollIntoViewIfNeeded)
&emsp;&emsp;元素在当前视口则不滚动（兼容性问题）

```js
scrollIntoView(boolean)
scrollIntoView(options)
// 为boolean时，true代表可视区域对齐，false可视区域的边缘对齐，根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，或者元素的底部边缘将与可见区域的底部边缘对准。
```

[getBoundingClientRect](#getBoundingClientRect)

&emsp;&emsp;获取元素大小，及相对视口的位置

```js
rectObject = object.getBoundingClientRect();
返回DOMRect对象
x 相对于视口原点的左侧，滚动时发生变化
y 相对于视口原点的顶部，滚动时发生变化
width 盒子宽度，包括border和padding
height 盒子高度，包括border和padding，出现滚动条时，只是视口高度+border+padding
top 相对于视口原点的顶部，滚动时发生变化
right 相对于视口原点的右侧，滚动时发生变化
bottom 相对于视口原点的底侧，滚动时发生变化
left 相对于视口原点的左侧，滚动时发生变化
```

