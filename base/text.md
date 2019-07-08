****

## 使用指南

```js
import { ClText } from 'mp-colorui'
```

## 一般用法

### 文字大小

```jsx
<ClText size='normal'>文案</ClText>
```

### 文字颜色

```jsx
<ClText textColor='blue'>文案</ClText>
```

### 文字底色

```jsx
<ClText bgColor='blue'>文案</ClText>
```

### 超出显示省略号

```jsx
<ClText cut>文案</ClText>
```

### 文字对齐

```jsx
<ClText align='left'>文案</ClText>
```

### 特殊

```jsx
<ClText special='firstUpper'>文案</ClText>
```



## 参数说明

### Text 参数

| 参数      | 说明             | 类型    | 可选值                                                       | 默认值     |
| --------- | ---------------- | ------- | ------------------------------------------------------------ | ---------- |
| size      | *文字大小*       | String  | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*,*`xxlarge`*,<br />*`slarge`*,*`xslarge`* | *`normal`* |
| textColor | *文字颜色*       | String  | 参考文档 [默认色-标准色](/home/color?id=标准色)              | *`black`*  |
| bgColor   | *文字背景色*     | String  | 参考文档 [默认色](/home/color)              | -          |
| cut       | *是否显示省略号* | Boolean | *`true`*,*`false`*                                           | *`false`*  |
| align     | *文字对齐方式*   | String  | *`left`*,*`center`*,*`right`*                                | *`left`*   |
| special   | *特殊需求*       | String  | *`firstUpper`*,*`upper`*,*`lower`*                           | -          |
| text      | 文字内容         | String  | -                                                            | -          |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/text/index" height="568" width="375"></iframe>
</div>
