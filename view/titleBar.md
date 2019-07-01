****

## 使用说明

```jsx
import ClTitleBar from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClTitleBar bgColor='black' />
```

### 文字颜色

```jsx
<ClTitleBar textColor='white' />
```

### 子标题类型

```jsx
<ClTitleBar type='border-title' />
```



## 参数说明

### TitleBar 参数

| 参数          | 说明                                     | 类型   | 可选值                                             | 默认值           |
| ------------- | ---------------------------------------- | ------ | -------------------------------------------------- | ---------------- |
| bgColor       | *标题栏背景色*                           | String | 参考文档 [默认色](/home/color)                     | *`white`*        |
| textColor     | *文字颜色*                               | String | 参考文档 [默认色-标准色](/home/color?id=标准色)    | *`green`*        |
| type          | *子标题类型*                             | String | *`border-title`*,*`sub-title`*,*`icon`*            | *`border-title`* |
| subTitle      | *子标题，仅 type 为 sub-title时设置*     | String | -                                                  | -                |
| subTitleColor | *子标题颜色*                             | String | 参考文档 [默认色-标准色](/home/color?id=标准色)    |                  |
| borderColor   | *子边线，仅 type 为 border-title 时设置* | String | 参考文档 [默认色](/home/color)                     | *`green`*        |
| borderLong    | *子边线长度*                             | Number | -                                                  | 20               |
| icon          | *仅 type 为 icon 时设置，图标*           | String | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -                |
| iconColor     | *图标颜色*                               | String | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | *`green`*        |
| title         | *标题*                                   | String | -                                                  | -                |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border-radius: 30px; border: 1px solid antiquewhite" src="http://118.25.36.24:8080/#/pages/components/titleBar/index" height="568" width="300"></iframe>
</div>
