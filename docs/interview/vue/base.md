# Vue

## 核心点

- 数据驱动：ViewModel，保证数据和视图的一致性。
- 组件系统：应用类UI可以看做全部是组件树构建。

## 单页面应用（SPA）& 多页面应用（MPA）

### 是什么🤔

Single-Page-Application。只有一个主页面的应用，HTML文件只需要加载一次，用户执行操作或在应用的各区域间导航时，无需重新加载页面。

Multiple page application。应用中有多个页面，页面跳转会刷新页面。

### 优点

- 无需加载整个页面，用户体验好，页面切换快。
- 服务器压力减小。
- 前后端分离，前端更关注交互，后端更关注数据。

### 缺点

- 不利于SEO(Search Engine Optimization)
- 首屏加载时间较长。 动态懒加载，webpack vendor，gzip压缩，路由、图片懒加载，使用雪碧图，增加首屏loading。

## 单向数据流

父级prop的更新会向下流动到子组件，反过来不行。

## 通信方式

- $emit、props
- $ref、$parent/$children
- provide、inject
- Eventbus：Vue 原型方法on/once/off/emit
- attrs/listeners 适用于隔代组件通信
- scopedSlots 子组件传值到父组件 [作用域插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)

## v-bind Vs v-model

### v-bind

更多的是绑定数据和属性以及表达式。

### v-model

主要使用在表单及自定义组件中。

本质上是语法糖。绑定v-model的表单元素，会忽略元素的value、checked、selected初始值，而是以Vue实例的数据作为数据来源。
v-model内部为不同的表单元素使用不同的property，并抛出不同的事件。

- text和textarea使用value和input事件。
- checkbox和radio使用checked的change事件。
- select使用value和change事件。

## v-show Vs v-if

v-show 是CSS状态的切换，v-if是完整的销毁和重新创建。频繁切换的使用v-show。

### Vuex

Vue.js 应用程序开发的状态管理模式。使用单一的状态树，一个对象包含全部的应用层级状态。

特点：

- 状态存储是响应式的。
- 不能直接改变store里面的装填，需要提交mutation。

模块：

- state，定义应用状态的数据结构。可通过mapState或store.state直接访问
- getter，state的派生状态，和计算属性类似，会将返回值根据它的依赖缓存起来， 可通过mapGetters 、store.getters访问。
- Mutatuon，更改store状态的唯一方式。mapMutations。
- Action， 提交mutation，执行异步操作。
- Module，将store分割成模块，每个模块都有自己的state，mutation，action等。namespaced: true，注册成为带命名空间的木块。它的getter、action、mutation等，都会自动根据模块注册的路径调整命名空间。

## Vue Router

### 模式

- hash，使用URL hash值来做路由。监听`hashchange`事件。路由中带有#。
- history，依赖H5 History API和服务器配置。history pushState，replaceState方法。
- abstract，支持所有JavaScript运行环境，常用于SSR。

## Proxy Vs Obejct.defineProperty

### 双向绑定实现

Vue2: Object.defineProperty
Vue3: Proxy

### Proxy 优势

- 可直接监听对象而非属性
- 可以直接监听数组变化
- 拦截方法丰富
- Proxy返回的是个新对象，可以只操作新对象达到目的，Object.defineProperty只能遍历对象属性进行修改。

### Proxy 劣势

- 不支持IE9

## nextTick/异步更新

更新单个或多个数据的时候，渲染不会立即触发，会先去收集需要更新的watcher，放到数组中，然后通过微任务/宏任务去调用数组中的watcher。

使用到的微任务/宏任务，Promise，MutationObserver，setImmediate，setTimeout实现。

## 优化

- 避免data中放过多的数据，可以使用computer，filter等。
- keep-alive
- v-for 事件代理
- v-if 、v-show
- 合理懒加载
- 数据不会变更的话，object.freeze
- runtime 版本

- 图片懒加载
- 骨架屏
- 可视区域加载 vue-virtual-scroll-list

## 参考

[在传统 Web 应用和单页应用 (SPA) 之间选择](https://docs.microsoft.com/zh-cn/dotnet/architecture/modern-web-apps-azure/choose-between-traditional-web-and-single-page-apps)

[30 道 Vue 面试题](https://juejin.im/post/5d59f2a451882549be53b170#heading-1)

[Vue 项目性能优化 — 实践指南](https://juejin.im/post/5d548b83f265da03ab42471d)

[Vue 核心之数据双向绑定](https://juejin.im/post/5d421bcf6fb9a06af23853f1)

<!-- [![zxl](https://github-readme-stats.vercel.app/api?username=snowtreetree)](https://github.com/snowtreetree) -->

[关于SPA的SEO解决方案](https://medium.com/@keshidong.dev/%E5%85%B3%E4%BA%8Espa%E7%9A%84seo%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88-2639a63361ad)

[vue常见面试题](https://zhuanlan.zhihu.com/p/92407628)

[Single-page application vs. multiple-page application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)