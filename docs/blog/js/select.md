# 文本选中

这两天做了一个H5文本选中，请求接口翻译的功能，类似于这种
![莫西莫西](https://tva1.sinaimg.cn/large/0082zybpgy1gcb1xlmmjnj30ju09o78l.jpg)
翻译是弹框形式的，不会改变文本流信息。

其实主要是两个问题需要解决  

* 监听选中及选中文本

* 选中文本位置信息

## [监听选中及文本](#监听选中及选中文本)

```js
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

document.onselectionchange = () => {
  console.log(document.getSelection());
};
// document.getSelection() 选中文本信息，document.getSelection().toString()则返回选中文本
```

## [选中文本位置信息](#选中文本位置信息)

getRangeAt 返回一个包含当前选区内容的区域对象，document.getSelection().getRangeAt(0)获取到选中文本第一个字的信息。再通过[getBoundingClientRect](../scroll.md)获取到元素的大小和位置信息，就可以通过选中文本的定位，控制翻译弹框的位置。

```js
const selection = document.getSelection()
const oRange = selection.getRangeAt(0)
const oRect = oRange.getBoundingClientRect()
const text = selection.toString()
```
