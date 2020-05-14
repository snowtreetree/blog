# BFC

Block Formatting Context，块级格式化上下文。可以看做是隔离的独立容器，内部元素的布局不会影响到外面的元素。

:::tip  
常见定位方案

- 普通流
- 浮动（float）。元素先按照普通流的位置出现，然后尽可能的向左/右偏移
- 绝对定位。脱离普通流，元素位置由绝对定位的坐标决定

:::

## BFC触发条件

- 根元素，HTML、body元素
- float不为none
- 绝对定位（position为absolute，fixed）
- display为inline-block、table-cells、flex
- overflow除了visible以外的值（hidden、auto、scroll）

## 特性

### 同一个BFC下外边距会发生折叠

### 清除浮动

### 阻止元素被浮动元素覆盖