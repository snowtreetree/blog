# Array 相关

## 数组拍平

```js
var arr = [1,2,[3,4,[5]]]
// flat 默认一层，使用Infinity
var flat1 = arr.flat(Infinity)
// 递归
function fn1(arr){
    // 或者使用instaceof
    if(!Array.isArray(arr)) return;
    let arr1 = []
    arr.forEach((item) => {
        if(Array.isArray(item)){
            // arr1.push(...fn1(item))
            arr1 = arr1.concat(fn1(item))
        }else{
            arr1.push(item)
        }
    })
    return arr1
}
var flat2 = fn1(arr)

// reduce 实现

function fn2(arr){
    if(Object.prototype.toString.call(arr) != "[object Array]"){return false};
    return arr.reduce((pre,cur) => pre.concat(Array.isArray(cur)?fn2(cur):cur),[])
}

var flat3 = fn2(arr)

// toString + split，数组元素限制为纯字符串、纯数字

var flat4 = arr.toString().split(',').map(item => +item)

// join+split

var flat5 = arr.join().split('')

```

## 区分是对象还是数组


# Date 
# Window
# promise
