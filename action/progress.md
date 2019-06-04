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

| 参数      | 说明             | 类型    | 可选值                          | 默认值     |
| --------- | ---------------- | ------- | ------------------------------- | ---------- |
| shape     | *进度条形状*     | String  | *`normal`*,*`radius`*,*`round`* | *`normal`* |
| bgColor   | *进度条背景色*   | String  | 参考文档 [默认色](/home/color)  | *`blue`*   |
| size      | *进度条大小设置* | String  | *`normal`*,*`small`*,*`xsmall`* | *`normal`* |
| stripe    | *进度条条纹*     | String  | *`true`*,*`false`*              | *`false`*  |
| animation | *进度条动画*     | Boolean | *`true`*,*`false`*              | *`false`*  |
| percent   | *进度条百分比*   | Number  | 0-100                           | 0          |

