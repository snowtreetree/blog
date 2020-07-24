# 常见算法

在程序中直接或者间接调用自己

## flat 数组拍平

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
   return arr.toString().split(',')
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

## 斐波那契数列

```js
function fibonacci1(n){
    if(n<=1){
        return 0
    }
    return fibonacci1(n-1) + fibonacci1(n-2)
}
function fibonacci2(n){
   let i = 0;
   let a = 1;
   let b = 0;
   while(++i<=n){
       [a,b] = [b,a+b]
   }
   return b
}
```

## 零钱兑换最优解
参考:
 - [leetcode](https://leetcode-cn.com/problems/coin-change/solution/js-xiang-jie-dong-tai-gui-hua-de-si-xiang-yi-bu-da/)
```js
var coins = [1,2,4,5]
var amount = 121

function coinChange(coins,amount){
    // coins 硬币种类
    // amount 总数
    // arrs为从0-amount，最优解的数组
    var arrs = New Array(amount+1).fill(Infinity)
    // 求取0-amount的最优解
    for(let i = 0;i<arrs.length;i++){
        for(let coin in coins){
            if(i-coin>=0){
                arrs[i] = Math.min(arr[i],arr[i-coin]+1)
            }
        }
    }
    return arrs[i] === Infinity?-1:arrs[i]
}

```