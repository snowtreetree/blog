# 排序

## 冒泡排序

未处理过的元素，经过对比，将最大或者最小的元素，依次放到未排序元素的起始位置

``` js
const arr = [4,5,1,2,6,3]
const len = arr.length
for(let i = 0; i < len-1; i++){
    for(let j = 0; j < len - i -1; j++ ){
        if(arr[j]>arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
    }
}
```

## 选择排序

在未排序的元素中，找到最大/最小值，放到未排序元素的起始位置。

```js
const arr = [4,5,1,2,6,3]
const len = arr.length
let minIndex
for(let i = 0; i < len - 1; i++){
    minIndex = i
    for(let j = i+1; j < len; j++){
        if(arr[minIndex]>arr[j]){
            minIndex = j
        }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
}
```

## 插入排序

未排序的数列，在已排序中，从前向后扫描，找到对应位置插入。

```js
const arr = [4,5,1,2,6,3]
const len = arr.length
for(let i = 1; i < len ; i++){
 let preIndex = i-1;
 let current = arr[i]
 while(preIndex >=0 && arr[preIndex] > current){
     arr[preIndex+1] = arr[preIndex]
     preIndex--
 }
 arr[preIndex+1] = current
}
```

## 快速排序

在数列中选择一个数字作为基准，然后小于基准的放到左边，大于基准的放到右边，再在基准左右列表的数列中，进行重复操作。

```js
const arr = [4,5,1,2,6,3]
function quickSort(arr){
    const len = arr.length
    if(len <= 1) return arr;
    const pivotIndex = Math.floor(len/2)
    const pivot = arr.splice(pivotIndex,1)[0];
    const left = []
    const right = []
    for(let i = 0; i < len; i++){
        if(i !== pivotIndex) {
            if(arr[i]<pivot) {left.push(arr[i])}else{
                right.push(arr[i])
            }
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}
```