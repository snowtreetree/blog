# 原型&原型链

::: tip  
- 构造函数、原型、实例
每个构造函数（constructor）都有一个原型对象（prototype），这个原型对象，又都包含了一个指向该构造函数的指针，通过构造函数创建出来的实例（instance）都包含了一个指针指向原型对象（prototype）。  
- 原型链
当访问实例对象的属性时，会现在对象内部查找，找不到，会在这个对象的原型（instance.prototype）里去找这个属性。循环如此。

```js
// 1、在instance中获取某个属性somePrototype
// 2、会先在当前实例里面去找，当找不到的时候，会去instance.__proto__(constructor.prototype)中寻找。  
// 3、循环往复，xxx
// 这条搜索属性/方法的轨迹，称为原型链。
```

:::

## 原型和实例的集成关系

- instanceof。判断构造函数是否在实例的*原型链*上出现过。
- isPrototype。同上

## 原型链的问题

- 当原型链中出现引用类型值的原型时，该引用类型会被所有实例共享。比如函数，对象等属性。
```js
function Father(){
    this.color=['red','black','blue']
}
function Son(){}
// 便于理解，这么写并一定合适
Son.prototype = new Father()
var instance1 = new Son();
var instance2 = new Son();
instance1.color.push('yellow')
console.log(instance2.color)
// 结果为["red", "black", "blue", "yellow"]
```

- 创建子类型的时候，不能向父类型的构造函数中传递参数。

## new 运算符

在调用构造函数创建实例时，new运算符，执行的事件
- 创建空对象
- 空对象的__proto__ 指向构造函数的prototype
- 将对象内的this指针指向新建的对象
- 若函数有返回，则直接返回，无返回时，新建的对象作为返回值

## Object.create
创建一个新对象，并将新对象的__proto__指向现有的对象