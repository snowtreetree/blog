# 递归

在程序中直接或者间接调用自己

## falt 数组拍平

```js
function flat(arr){
    const len = arr.length
    let flatArr = []
    for(let i = 0; i < len; i++){
        if(Array.isArray(arr[i])){
            flatArr = flatArr.concat(flat(arr[i])) 
        }else{
            flatArr.push(arr[i])
        }
    }
    return flatArr
}

// 元素均为字符串或数字
function flat2(arr){
   return arr. toString().split(',')
}
```

## 爬楼梯

一共N级楼梯，每次能上一级或二级，刚开始在第一级，共有多少种走法。

```js
function cStairs(n){
    if(n === 1 || n === 2){
        return 1
    }else{
        return cStairs(n-1) + cStairs(n-2)
    }
}
```

