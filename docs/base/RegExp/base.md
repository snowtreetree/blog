# 正则表达式

Regular Expression，简写Regex、Regexp。

## 写法

```js
var regex1 = /\d/i
var regex2 = new Regex(/\d/i)
var regex3 = new Regex('xyz','i')
var regex3 = new Regex(/\d/,'i')
```

### [在线测试](https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24)

## 常用方法

### RegExp.prototype.test()

用来检查正则表达式与指定字符是否匹配。

regexObj.test(str)，返回true或false。

```js
var result = /^hello/.test('hello world')
// result true
```

### RegExp.prototype.exec()

索引字符串中的指定值，返回找到的值，如果没有匹配到，返回null。

```js
var result = /hello/.exec('fhdjhello')
// result ["hello", index: 4,...]
```

### String.prototype.match()

stringObject.match(regexp)，返回匹配结果（数组形式），不是字符串的位置。

match的参数为RegExp对象，如果不是则会通过RegExp进行转换。

### String.prototype.replace(regexp|substr, newSubStr|function)

- regexp 正则表达式
- substr 字符串
- newSubStr 新字符串
- function 函数参数(match,p1,p2...,offset,string)
    - match 匹配的字符串
    - p1,p2... regexp表达式中第n个小括号的值
    -  offset 偏移量
    - 原字符串

```js
var str = 'hello hello'
var result1 = str.match(/hello/)
// results ["hello",index:0...]
var result2 = str.match(/hello/g)
// result2 ["hello","hello"]
```

### String.prototype.search()

返回第一个匹配字符/内容的位置，找不到返回-1。不会全局匹配

```js
var str = 'hello hello'
var result1 = str.search(/hello/)
// result1 0
```

## 表达式中的符号

- `g` 全部匹配

```js
var str = 'gggg'
var result1 = str.match(/g/)
var result2 = str.match(/h/g)
// result1 ["g", index: 0,...]
// result2 ["g", "g", "g", "g"]
```

- `i` 不区分大小写

- `m` 多行匹配?

```js
var str = 'mm\mm'
var result1 = str.match(/m/g)
var result2 = str.match(/m/gm)
```

- `^` 开始。以^后面作为开始内容

```js
var result1 = /^hello/.test('hello')
var result2 = /^hello/.test('nihao hello')
// result1 true，result2 false
```

- `$` 结束。以$前的内容作为结束内容。

```js
var result1 = /hello$/.test('hello world')
var result2 = /hello$/.test('nihao hello')
// result1 false，result2 false
```

- `+` 加号前的内容/字符，必须要出现一次或多次。会尽可能的多匹配。

```js
var result1 = /hell[oo]+/.test('hellooooo')
var result2 = /hell[o]+/.test('hello')
// result1 true, result2 true
```

- `*` 星号前的内容/字符，出现0次或多次，会尽可能的多匹配。

```js
var result1 = /hell[oo]*/.test('hell')
var result2 = /hell[o]*/.test('hello')
// result1 true, result2 true
```

- `?` 问号前的内容，可出现0次或1次。

```js
var result1 = /hell[oo]?/.test('hell')
var result2 = /hell[o]?/.test('hello')
// result1 true, result2 true
```

- `|` 或，两个选项之间的选择

```js
var result1 = /(hello)|(nihao)/.test('helloooo')
var result2 = /hello|nihao/.test('nihao')
// result1 true, result2 true
```

- {n} 前面的内容/字符，匹配n次
- {n,} 前面的内容/字符，匹配至少n次
- {n,m} 前面的内容/字符，匹配n-m次

```js
var result1 = /[0-9]{1}/.test(2)
var result2 = /[0-9]{1}/.test('a')
var result3 = /[0-9]{1,}/.test(1234)
var result4 = /[0-9]{1,3}/.test('12a34')
// result1 true，result2 false，result3 true，result4 true
```

- `[]` 中括号中的任一值，常用a-z（小写字符），A-Z（大写字符），0-9（数字）。

```js
// 匹配1-99
var regNum = /[1-9][0-9]{0,1}/
```

- `()` [子表达式]('./#子表达式')。

- `\d` 匹配数字，等价于[0-9]
- `\D` 匹配非数字，等价于[^0-9]

- `(pattern)`，获取到匹配pattern的字符/内容，匹配到的内容可以从Matches中获取，可以使用$0...$9属性获取。

- `(?:pattern)` 非获取匹配。

- [^abc] 匹配未包含的字符

- `\b` 匹配单词边界。具体就是`\w`和`\W`之前的位置。

```js
var result = "[JS] less is more.jpg".replace(/\b/g,'#')
// result "[#JS#] #less# #is# #more#.#jpg#"
```

- `\w` 匹配数字、字母、下划线。等价于[0-9a-zA-Z_]
- `\W` 匹配非数字、字母、下划线。等价于[^0-9a-zA-Z_]


- `\B` 匹配非单词边界。
- `.` 匹配除了换行、回车、行分隔符、段分隔符之外的字符。

```js
var result1 = /nihao\b/.test('nihao')
var result2 = /nihao\b/.test('nihao2')
// result1 true, result2 false

var result3 = /nihao\B/.test('nihao')
var result4 = /nihao\B/.test('nihao2')
// result3 false, result4 true
```

- `\s` 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]
- `\S` 匹配任何非空白字符，包括空格、制表符、换页符等等。等价于 [^ \f\n\r\t\v]

- `\number` num 为数字，对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。[反向引用]('./#反向引用')。

- `(?=p)` 子等式，p前面的位置，p是个子模式。
- `(?!p)` 子等式取反。

```js
var result1 = '123456'.replace(/(?=6)/g,'#')
var result2 = '123456'.replace(/(?!6)/g,'#')
// result1 "12345#6"， result2 "#1#2#3#4#56#"
```

## 相关概念

### 模糊匹配

- 横向模糊匹配。可匹配的字符串的长度不固定。

```js
var regex = /\d{2,5}/
```

- 纵向模糊匹配。在匹配字符的时候，某一位的字符可以有多种选择。

```js
var regex = /a[2-9]c/
```

### 贪婪匹配和惰性匹配

- 贪婪匹配，尽可能多的去匹配字符。

```js
var regex = /\d{2,5}/g
'123 12345 123456'.match(regex)
// ["123", "12345", "12345"]
// 设置匹配的字符长度为2-5，当符合规则的字符长度 <= 5时，会全部匹配到，>5 时，会按最大的限制来，当前最大限制是5
```

- 惰性匹配，尽可能少的匹配字符。

```js
{m,n}?
{m,}?
??
+?
*?
```


### 反向引用

调用已经匹配到的值。

- `\1`，指向$1，即第1个()中匹配到的值
- `\2`，指向$2，即第2个()中匹配到的值
- ...

```js
var str1 = 'aaa000bbb111'
var reg1 = /(\d)\1\1/g
var result1 = str1.match(reg1)
// result1 ['000','111']

```

## 其他

### 匹配任意字符

[\d\D]，[\w\W]，[\s\S]，[^]。

### 不匹配任何字符

```js
/.^/
```

### 千分位分隔

```js
var result = '123222456'.replace(/(?!^)(?=(\d{3})+$)/g,'$1,')
// "123,222,456"

// ?!^ 非开头
// ?= 子等式，正向预查
// \d{3} 匹配连续的三位数字
// + 至少匹配一次
```

### 日期间隔符替换

```js
var date = (new Date()).toLocaleDateString()
// 2020/6/5
date.replace(/(\d{4})\/(\d{1,2})\/(\d{1,2})/,'$1,$2,$3')
// date.split('/').join(',')
```

### 首尾空格替换（trim）

```js
var reg = /^\s|\s+$/g
var str = 'hello world '
var result = str.replace(reg,'')
```

### 首字母大写

```js
var reg = /(?:^|\s)\w/g
var str = 'hello world'
var result = str.replace(reg,function(match,c){
    // match 匹配元素
    return match.toUpperCase()
})
// result 'Hello World'
```

### 驼峰

```js
var reg = /[-_\s]+(.)?/g
var str = 'hello-world'
var result = str.replace(reg,function(match,c){
    console.log(match,c)
    // match 匹配的字符串，c 第1个小括号匹配的字符串
    return c?c.toUpperCase():''
})
```

