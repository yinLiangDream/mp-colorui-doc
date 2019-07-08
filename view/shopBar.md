****

## 使用说明

```jsx
import ClShopBar from 'mp-colorui'
```



## 一般用法

### 设置背景色

```jsx
<ClShopBar bgColor='black' />
```

### 固定在底部

```jsx
<ClShopBar fix />
```

### 分割线

```jsx
<ClShopBar border />
```



## 参数说明

### ShopBar 参数

| 参数    | 说明             | 类型      | 可选值                                          | 默认值    |
| ------- | ---------------- | --------- | ----------------------------------------------- | --------- |
| bgColor | *背景色*         | String    | 参考文档 [默认色](/home/color) | *`white`* |
| fix     | *是否固定在底部* | Boolean   | *`true`*,*`false`*                              | *`false`* |
| border  | *是否显示分割线* | Boolean   | *`true`*,*`false`*                              | *`false`* |
| tabs    | *每一项 tab*     | tabs[]    | [详情](/view/shopBar?id=tabs)                   | []        |
| buttons | *右侧按钮组*     | buttons[] | [详情](/view/shopBar?id=buttons)                | []        |

### tabs

| 参数  | 说明     | 类型           | 可选值                                             | 默认值   |
| ----- | -------- | -------------- | -------------------------------------------------- | -------- |
| badge | *角标*   | Boolean/Number | -                                                  | *`true`* |
| icon  | *图标*   | String         | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -        |
| img   | 图片地址 | String         | -                                                  | -        |
| title | 标题     | String         | -                                                  | -        |



### buttons

| 参数    | 说明       | 类型   | 可选值                                          | 默认值 |
| ------- | ---------- | ------ | ----------------------------------------------- | ------ |
| text    | *按钮文字* | String | -                                               | -      |
| bgColor | *按钮颜色* | String | 参考文档 [默认色](/home/color) | -      |



### ShopBar 事件

| 事件名称      | 说明                 | 参数返回                           |
| ------------- | -------------------- | ---------------------------------- |
| onClickTab    | *每个 tab 点击事件*  | index，*参数 index 为每一项的下标* |
| onClickButton | *每个按钮的点击事件* | index，*参数 index 为每一项的下标* |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/shopBar/index" height="568" width="375"></iframe>
</div>
