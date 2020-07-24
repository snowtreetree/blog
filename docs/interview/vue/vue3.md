# Vue3 相关知识点

## 新特性

### 性能提升

### Tree shaking support

无用模块剪辑，只打包需要的内容。
比如`v-model`, `<transition>` 等

### Composition API

和React Hook类似。

### Fragment, Teleport, Suspense

Fragment, 模板不再只限制一个根节点。
render 函数也可以返回数组。
Teleport 传送门。常用于modal，popup等。
Suspense 悬念

### Typescript

更好的TS支持。

### Custom Render API

## Composition  API

- 可以通过逻辑关系组织代码
- 灵活的逻辑组合和复用
- 可以和现有的`Options API` 一起使用

### 与mixin比较

- 模板prototype来源清晰，使用多个mixin模板时，很难直接看出prototype来自哪一个mixin。
- 命名空间冲突，组合式API可以通过解构赋值，mixin可能会存在覆盖的情况
- 使用mixin，需要创建无渲染的组件实例，组合式API则不会，减少性能损耗。

### 和React Hook相比

- 不用顾虑调用顺序，可以使用在条件语句中
- 不会再每次渲染的时候重复执行，降低垃圾回收压力
- 不会再内联处理函数导致子组件更新的问题
- 自动记录依赖。watchEffect。

## 常用API

### setup

Composition API的入口，会在beforeCreate之前调用。

#### params:

- props, 响应式，不可解构，会导致失去响应式。
- context, 包含了attrs, slots, emit等

### reactive

接收普通对象，返回改对象的响应式代理。

```js
const state = reactive({ count: 0 })
```

### ref

接收一个参数值，并返回一个响应式可改变的ref对象。

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

### reactive VS ref

使用reactive的组合函数，为了保证响应式，对应的对象不能够解构。使用toRefs解决此约束。

### computed

计算属性，传入一个getter函数，返回一个默认不可手动修改的ref对象。

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  },
})

plusOne.value = 1
console.log(count.value) // 0
```

### readonly

和reactive类似，但是返回的对象只读。

### watchEffect

传入一个函数，响应式追踪。第一次是在mounted之前的生命周期执行，如果需要访问DOM，可以放到onMounted钩子中执行。

```js
onMounted(() => {
    watchEffect(()=>{})
})
```

#### 停止监听

```js
const stop = watchEffect(()=>{})
...
stop()
```

### watch

#### 相对于watchEffect：

- 懒执行
- 可自定义监听源
- 可访问监听状态前后变化的值

## 生命周期

### 对比

- beforeCreate => setup()
- created => setup()
- beforeMount => onBeforeMount
- mounted => onMounted
- beforeUpdate => onBeforeUpdate
- uodated => onUpdated
- beforeDestory => onBeforeUnmount
- destroyed => onUnMounted
- errorCaptured => onErrorCaptured

## 依赖注入

## 参考

[抄笔记：尤雨溪在Vue3.0 Beta直播里聊到了这些…](https://juejin.im/post/5e9f6b3251882573a855cd52)
[Vue3 究竟好在哪里？（和 React Hook 的详细对比）](https://juejin.im/post/5e9ce011f265da47b8450c11)
[Vue Composition API](https://composition-api.vuejs.org/zh/#%E5%8A%A8%E6%9C%BA%E4%B8%8E%E7%9B%AE%E7%9A%84)
[Vue Composition API List](https://composition-api.vuejs.org/zh/api.html#setup)
[<Teleport /> Vue 3’s new feature](https://medium.com/@patelvivek2530/teleport-vue-3s-new-feature-a887fe05fd87)
[suspense](https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/)


[Vue next template explorer](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeImports%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%7D%7D)
