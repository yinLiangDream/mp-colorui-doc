****

## 使用说明

```js
import ClTag from 'mp-colorui'
```

## 一般用法

### 形状设置

```jsx
<ClTag shape='round' />
```

### 大小设置

```jsx
<ClTag size='small' />
```

### 角标设置

```jsx
<ClTag badge />
```

### tag 数组设置

```jsx
<ClTag tags={[]} />
```

## 参数说明

### Tag 参数

| 参数     | 说明                       | 类型    | 可选值                          | 默认值     |
| -------- | -------------------------- | ------- | ------------------------------- | ---------- |
| shape    | *tag 形状*                 | String  | *`normal`*,*`round`*,*`radius`* | *`normal`* |
| size     | *tag 大小设置*             | String  | *`normal`*,*`small`*            | *`normal`* |
| canTouch | 是否可以点击               | Boolean | *`true`*,*`false`*              | *`false`*  |
| badge    | *该标签是否显示为角标位置* | Boolean | *`true`*,*`false`*              | *`false`*  |
| tags     | *tag 数组*                 | tags[]  | [详情](/view/tag?id=tags)       | []         |

### tags

| 参数     | 说明           | 类型    | 可选值                                                       | 默认值    |
| -------- | -------------- | ------- | ------------------------------------------------------------ | --------- |
| color    | *标签颜色*     | String  | 参考文档 [默认色-标准色](/home/color?id=标准色) | -         |
| plain    | *是否镂空*     | Boolean | *`true`*,*`false`*                                           | *`false`* |
| icon     | *图标*         | String  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname)           | -         |
| text     | 文字           | String  | -                                                            | -         |
| disabled | *是否禁止点击* | Boolean | *`true`*,*`false`*                                           | *`false`* |



### Tag 事件

| 事件名称 | 说明     | 返回参数          |
| -------- | -------- | ----------------- |
| onClick  | 点击事件 | index(第几个标签) |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border-radius: 30px; border: 1px solid antiquewhite" src="http://118.25.36.24:8080/#/pages/components/tag/index" height="568" width="300"></iframe>
</div>
