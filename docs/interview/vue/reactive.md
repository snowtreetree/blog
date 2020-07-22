# 响应式测试

```js
// 收集依赖的框
var data = {
    a:1,
    b:2,
    c:{d:2}
}

var Target = null


function walk(data) {
    for(const key in data) {
        const dep = []
        let val = data[key]
        const nativeString = Object.prototype.toString.call(val)
        if(nativeString.toLowerCase() === '[object object]'){
            walk(data)
        }
        Object.defineProperty(data,key,{
            set(newValue){
                if(newValue === val) return
                // 属性设置时，将框中的依赖全部执行一遍
                val = newValue
                dep.forEach(fn=>fn())
            },
            get(){
                // 属性获取到的时候，将依赖放到框中
                dep.push(Target)
                return val
            }
        })
    }
}


walk(data)



function $watch(exp,fn){
    Target = fn
    let obj = data
    if(typeof exp === 'function'){
        exp()
        return
    }
    if(/\./.test(exp)){
        const pathArr = exp.split('.')
        pathArr.forEach(p => {
            obj=obj[p]
        })
        return
    }
    data[exp]
}

function render () {
  return document.write(`姓名：${data.name}; 年龄：${data.age}`)
}
```
