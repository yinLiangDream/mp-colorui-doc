****

## 使用说明

```jsx
import ClDrawer from 'mp-colorui'
```



## 一般用法

### 显示抽屉

```jsx
<ClDrawer show>内容</ClDrawer>
```

### 抽屉方向

```jsx
<ClDrawer direction='left' >内容</ClDrawer>
```

### 点击阴影关闭

```jsx
<ClDrawer closeWithShadow >内容</ClDrawer>
```



## 参数说明

### Drawer 参数

| 参数            | 说明           | 类型    | 可选值                        | 默认值     |
| --------------- | -------------- | ------- | ----------------------------- | ---------- |
| show            | *是否显示*     | Boolean | *`true`*,*`false`*            | *`false`*  |
| direction       | *抽屉方向*     | String  | *`bottom`*,*`left`*,*`right`* | *`bottom`* |
| closeWithShadow | *点击阴影关闭* | Boolean | *`true`*,*`false`*            | *`true`*   |



### Drawer 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onCancel | *点击阴影取消事件* | -        |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/drawer/index" height="568" width="375"></iframe>
</div>
