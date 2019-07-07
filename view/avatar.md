****

## 使用指南

```js
import { ClAvatar } from 'mp-colorui'
```

## 一般用法

### 形状

```html
<ClAvatar shape='round' />
```

### 大小

```html
<ClAvatar size='normal' />
```

### 阴影

```html
<ClAvatar shadow />
```

### 头像数组

```jsx
<ClAvatar headerArray={[]} />
```

## 参数说明

### Avatar 参数

| 参数        | 说明                   | 类型          | 可选值                                              | 默认值     |
| ----------- | ---------------------- | ------------- | --------------------------------------------------- | ---------- |
| shape       | *提供头像形状设置*     | String        | *`radius`*,*`round`*                                | *`radius`* |
| size        | *提供头像组件大小设置* | String        | *`small`*,*`normal`*,*`large`*,*`xlarge`*           | *`normal`* |
| shadow      | *提供头像组件阴影设置* | Boolean       | *`true`*,*`false`*                                  | *`true`*   |
| headerArray | *头像组数组*           | headerArray[] | 详细参数看 [这里](/view/avatar?id=headerarray) 查看 | []         |

### headerArray

| 参数     | 说明                                 | 类型   | 可选值                                             | 默认值    |
| -------- | ------------------------------------ | ------ | -------------------------------------------------- | --------- |
| text     | *头像内置文字(只显示第一个字)*       | String | -                                                  | -         |
| tag      | *头像右上角小标签*                   | String | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -         |
| tagColor | *提供头像组件右上角小标签背景色设置* | String | 参考文档 [默认色](/home/color)    | -         |
| icon     | *头像内图标*                         | String | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -         |
| url      | *图片 url*                           | String | -                                                  |           |
| bgColor  | *头像组件背景色设置*                 | String | 参考文档 [默认色](/home/color)    | *`black`* |

### Avatar 事件

| 事件名称 | 说明         | 返回参数 |
| -------- | ------------ | -------- |
| onClick  | 点击头像事件 | -        |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，由于域名问题，暂时无法访问网页版，会尽快修复。</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/avatar/index" height="568" width="375"></iframe>
</div>
