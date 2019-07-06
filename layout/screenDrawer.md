****

## 使用说明

```jsx
import ClScreenDrawer from 'mp-colorui'
```



## 一般用法

### 显示全屏抽屉

```jsx
<ClScreenDrawer show >我是内容</ClScreenDrawer>
```



## 参数说明

### ScreenDrawer 参数

| 参数         | 说明                | 类型    | 可选值             | 默认值    |
| ------------ | ------------------- | ------- | ------------------ | --------- |
| show         | *显示 screenDrawer* | Boolean | *`true`*,*`false`* | *`false`* |
| renderPage   | 页面显示内容        | Element | -                  | -         |
| renderDrawer | 抽屉显示的内容      | Element | -                  | -         |



### ScreenDrawer 事件

| 事件名称 | 说明                 | 参数返回 |
| -------- | -------------------- | -------- |
| onHide   | *点击返回小箭头触发* | -        |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，由于域名问题，暂时无法访问网页版，会尽快修复。</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/screenDrawer/index" height="568" width="375"></iframe>
</div>
