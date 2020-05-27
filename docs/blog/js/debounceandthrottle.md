# 防抖&节流

## 防抖

::: tip
函数在指定time内只执行一次，time内多次触发，重新计算时间
:::

```js
var debounce = function (fn,time=2000,immediate){
    let timeout = null;
    return function(){
        let context = this;
        let args = arguments;
        let result
        timeout&&clearTimeout(timeout)

        if(immediate) {
            // 立即执行
            if(!timeout) result = fn.apply(context,args);
                timeout = setTimeout(()=>{
                    timeout = null
                },time)
            }else{
             timeout = setTimeout(() => {
                fn.apply(context,args)
            },time)
            return result
        }
    }

    debounce.cancel = function(){
        timeout&&clearTimeout(timeout);
        timeout = null
    }
}
```

## 节流
::: tip
函数在指定time内只执行一次
:::

```js
var throttle = function (fn,time){
    let timeout;
    return function (){
        let context = this;
        let args = arguments;
        if(!timeout){
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(context,args)
            },time)
        }
    }
}
```