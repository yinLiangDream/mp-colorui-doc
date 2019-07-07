****

## 使用说明

```jsx
import ClSwitch from 'mp-colorui'
```



## 一般用法

### Switch 表现形式

```jsx
<ClSwitch type='form' />
```



### Switch 形状

```jsx
<ClSwitch shape='radius' />
```



### 选中状态

```jsx
<ClSwitch checked />
```



## 参数说明

### Switch 参数

| 参数    | 说明          | 类型    | 可选值                                          | 默认值     |
| ------- | ------------- | ------- | ----------------------------------------------- | ---------- |
| type    | *switch 类型* | String  | *`normal`*,*`form`*                             | *`normal`* |
| title   | *标题*        | String  | -                                               | -          |
| shape   | *形状*        | String  | *`normal`*,*`radius`*                           | *`normal`* |
| color   | *选中颜色*    | String  | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*  |
| checked | *是否选中*    | Boolean | *`true`*,*`false`*                              | *`false`*  |



### Switch 事件

| 事件名称 | 说明                 | 参数返回       |
| -------- | -------------------- | -------------- |
| onChange | *改变选中状态时触发* | flag，选中状态 |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，由于域名问题，暂时无法访问网页版，会尽快修复。</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/switch/index" height="568" width="375"></iframe>
</div>
