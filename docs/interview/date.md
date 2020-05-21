# Date

基于Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。
常见使用方法

## 获取时间戳

```js
var d1 =  Date.now() 
var d2 = new Date().getTime()
var d3 = new Date().valueOf()
var d4 = + new Date()
// d1 - d4 获取到的时间戳为精确的毫秒数
// d4 其实是调用了valueOf 方法
var d5 = Date.parse(new Date());
// d5毫秒数均为000
```

## 常见属性/方法

```js
var date = new Date()
var year = date.getFullYear() // 获取当前年份
date.setFullYear(2012) // 设置年份
var month = date.getMonth() // 获取月份信息（0-11）
date.setMonth(12) // 设置月份信息
var date = date.getDate() //获取日期
date.setDate(22)
var day = date.getDay()

var hours = date.getHours()
date.setHours(0)
var minutes = date.getMinutes()
date.setMinutes(0)
var seconds  = date.getSeconds()
date.setSeconds(0)
// 毫秒
var milliSeconds = date.getMilliseconds()

// 获取当前年月日
var localDate = date.toLocaleDateString()
// 输出’yyyy/mm/dd‘，可用split，join处理成'yyyy-mm-dd'

// 获取当前年月日及具体时间
var localDateString = date.toLocaleString()
// "2020/5/21 下午10:44:59"

// 获取当前具体时间
var localTime = date.toLocaleTimeString()
```