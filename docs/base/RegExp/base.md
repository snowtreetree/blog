# 正则表达式

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

```js
var str = 'hello hello'
var result1 = str.match(/hello/)
// results ["hello",index:0...]
var result2 = str.match(/hello/g)
// result2 ["hello","hello"]
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

- `()` 子表达式。

- `\d` 匹配数字，等价于[0-9]
- `\D` 匹配非数字，等价于[^0-9]

- `(pattern)`，获取到匹配pattern的字符/内容，匹配到的内容可以从Matches中获取，可以使用$0...$9属性获取。

- `(?:pattern)` 非获取匹配。

- [^abc] 匹配未包含的字符

- `\b` 匹配单词边界。
- `\B` 匹配非单词边界。

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

- `\w` 匹配数字、字母、下划线。等价于[0-9a-zA-Z_]
- `\W` 匹配非数字、字母、下划线。等价于[^0-9a-zA-Z_]

- `\num` num 为数字，对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。





