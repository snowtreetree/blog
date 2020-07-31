# Generator & async

## Generator

ES6 的异步解决方案。是一个状态机，封装了多个内部状态。

执行Generator函数会返回一个`遍历器对象`，可以依次遍历Generator函数内部的每一个状态。

- function和函数名之间有一个`*`
- 函数内部使用yield表达式

调用Generator函数后，不会立即执行，会返回一个纸箱内部状态的`指针对象`，调用遍历器对象的`next`方法，使得指针移向下一个状态。

```js
function * generatorFun(){
    yield 'hello';
    yield 'world'
}
```

任意一个对象的`Symbol.iterator`方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。

### next

yield 表达式本身没有返回值，next 方法可以带一个参数，作为上一个yield的返回值。

```js
function * foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5)
a.next() // {value:6,done:false}  x:5
a.next(9) // {value:6,done:false} y:18
a.next(10) // {value:33, done:true}
```

## for...of

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```

for...of 依次显示yield的值，一旦next方法返回对象的结果是true，for...of就会终止。

## Generator.prototype.throw

抛出错误，可通过trycatch捕获，throw之后状态就会变为true，函数终结。

## Generator.prototype.return

主动终结。

## async

基于Generator改进。

- 内置执行器
- 更好的语义
- 返回promise
