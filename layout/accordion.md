## 使用指南

```js
import { ClAccordion } from 'mp-colorui'
```

## 一般用法

### 卡片模式

```html
<ClAccordion card>
	...
</ClAccordion>
```

### 禁止动画

```html
<ClAccordion animation={false}>
	...
</ClAccordion>
```

### 展开速度

```html
<ClAccordion speed={0.3}>
	...
</ClAccordion>
```

## 参数说明

### Avatar 参数

| 参数      | 说明               | 类型    | 可选值 | 默认值    |
| --------- | ------------------ | ------- | ------ | --------- |
| title     | *手风琴标题*       | string  | -      | -         |
| open      | *是否展开*         | boolean | -      | *`false`* |
| animation | *开启动画效果*     | boolean | -      | *`true`*  |
| card      | *是否使用卡片形式* | boolean | -      | *`false`* |
| speed     | *展开速度*         | number  | -      | *`0.15`*  |

### Avatar 事件

| 事件名称 | 说明           | 返回参数 |
| -------- | -------------- | -------- |
| onClick  | 点击手风琴事件 | boolean  |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/accordion/index" height="568" width="375"></iframe>
</div>