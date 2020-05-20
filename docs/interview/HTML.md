# HTML相关

### ID 重复的问题

通常认为同一个HTML中元素的ID是唯一的，但是，对于现在的单页面中，有些模块是动态加载的，因此ID可能会出现重复。页面也不会报错  

当出现这种情况的时候，通过ID设置的CSS属性，通常两者都会生效。
通过document.getElementById/document.querySelector 获取对应的ID元素的时候，只会获取到第一个元素。document.querySelectorAll('#xxx')会获取全部的对应元素。