# mars-mta

> 针对MTA(腾讯移动分析)的Vue插件

### Introduction

`mars-mta`是针对MTA(腾讯移动分析)的vue插件,可直接使用.


## 安装方法
### 全局安装
```bash
$ npm i mars-mta --save
```
```JavaScript
// main.js
import Mars from 'mars-mta'
  Vue.use(Mars, {
    open: true, // 开关,若为false,则不会发出上报
    config: {
      sid: '', // 必填，统计用的appid
      cid: '', // 如果开启自定义事件，此项目为必填，否则不填
      autoReport: 0, // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
      senseHash: 1, // hash锚点是否进入url统计
      senseQuery: 0, // url参数是否进入url统计
      performanceMonitor: 0, // 是否开启性能监控
      ignoreParams: [] // 开启url参数上报时，可忽略部分参数拼接上报
    }
  })
```

## API
### stat(options)
上报事件的基本方法
> 全局安装
```JavaScript
// page.vue
export default {
  name: 'page',
  data () {
    return {
    }
  },
  methods: {
    handleClick (log) {
      // 自助上报
      this.$stat({
        event: '', // 上报事件,
        data: {} // 附带事件数据
      })
    }
  },
  async created () {
  }
}
```
```JavaScript
// page.vue
import { stat } from '...'
export default {
  name: 'page',
  data () {
    return {
    }
  },
  methods: {
    handleClick (log) {
      // 自助上报
      stat({
        type: '', // 事件类型
        link: '', // 上报链接
        event: '', // 上报事件
        title: '' // 事件标题
      })
    }
  },
  async created () {
  }
}
```
## 组件
### mars-link
`<mars-link>`组件可以自动生成一个跳转前会上报事件的链接
```HTML
<mars-link href="a.html" event="click_link" :data="{foo: '2333'}" class="link">链接</mars-link>

<mars-link tag="a" href="a.html"  event="click_link" class="link">
  <i></i>
  <p>链接</p>
</mars-link>
```

| 属性        | 说明   |  默认值  |
| --------   | -----:  | :----:  |
| tag     | 标签 |  a     |
| href        |   跳转链接   |   -   |
| event        |    事件    |  -  |
| data        |    事件附带数据    |  -  |

### mars-btn
`<mars-btn>`组件可以自动生成一个按钮类型的元素,点击会自动上报,可传入点击事件
```HTML
<mars-btn event="click_link" :data="{foo: '2333'}" class="btn" @click="handleClick('2333')">按钮</mars-btn>

<mars-btn tag="button" event="click_link" class="btn" @click="handleClick('2333')">
  <i></i>
  <p>按钮</p>
</mars-btn>
```
属性

| 属性        | 说明   |  默认值  |
| --------   | -----:  | :----:  |
| tag     | 标签 |  a     |
| event        |    事件    |  -  |
| data        |    事件附带数据    |  -  |

| 事件        | 说明   |
| --------   | -----:  |
| click     | 点击事件,不论有没有定义点击事件,都会上报. |