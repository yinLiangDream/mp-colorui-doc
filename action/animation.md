

## 使用说明

```jsx
import ClAnimation from 'mp-colorui'
```



## 一般用法

### animation 类型

```jsx
<ClLoading type='fade' />
```

### animation 动画翻转

```jsx
<ClLoading type='fade' reserve/>
```



## 参数说明

### Animation 参数

| 参数    | 说明       | 类型    | 可选值                                                       | 默认值    |
| ------- | ---------- | ------- | ------------------------------------------------------------ | --------- |
| type    | *动画类型* | String  | *`fade`*, *`scale-up`*, *`scale-down`*, *`slide-top`*, *`slide-bottom`*, *`slide-left`*, *`slide-right`*, *`shake`* | *`fade`*  |
| reserve | *动画反转* | Boolean | `true`, `false`                                              | *`false`* |
| delay   | *延迟执行* | Number  | -                                                            | 0         |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/animation/index" height="568" width="375"></iframe>
</div>