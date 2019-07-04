****

## 使用说明

```jsx
import ClProgress from 'mp-colorui'
```



## 一般用法

### 进度条形状

```jsx
<ClProgress shape='round' />
```

### 进度条背景色

```jsx
<ClProgress bgColor='black' />
```

### 进度条动画

```jsx
<ClProgress animation />
```

### 进度条条纹

```jsx
<ClProgress stripe />
```

### 进度条百分比

```jsx
<ClProgress percent={60} />
```



## 参数说明

### Progress 参数

| 参数      | 说明                             | 类型    | 可选值                          | 默认值     |
| --------- | -------------------------------- | ------- | ------------------------------- | ---------- |
| shape     | *进度条形状*                     | String  | *`normal`*,*`radius`*,*`round`* | *`normal`* |
| bgColor   | *进度条背景色*                   | String  | 参考文档 [默认色](/home/color)  | *`blue`*   |
| size      | *进度条大小设置*                 | String  | *`normal`*,*`small`*,*`xsmall`* | *`normal`* |
| stripe    | *进度条条纹（渐变色无条纹效果）* | String  | *`true`*,*`false`*              | *`false`*  |
| animation | *进度条动画*                     | Boolean | *`true`*,*`false`*              | *`false`*  |
| percent   | *进度条百分比*                   | Number  | 0-100                           | 0          |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，如果您的浏览器无法访问，请使用 Chrome</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/progress/index" height="568" width="320"></iframe>
</div>
