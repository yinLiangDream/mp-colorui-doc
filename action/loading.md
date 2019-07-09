****

## 使用说明

```jsx
import ClLoading from 'mp-colorui'
```



## 一般用法

### loading 类型

```jsx
<ClLoading type='line' />
```

### loading 背景色

```jsx
<ClLoading bgColor='black' />
```



## 参数说明

### Loading 参数

| 参数         | 说明                                  | 类型    | 可选值                             | 默认值    |
| ------------ | ------------------------------------- | ------- | ---------------------------------- | --------- |
| type         | *loading 类型*                        | string  | *`bar`*,*`modal`*,*`bar`*,*`line`* | *`bar`*   |
| bgColor      | *背景色*                              | string  | 参考文档 [默认色](/home/color)     | *`blue`*  |
| modalText    | *type 为 modal 时显示的文字*          | string  | -                                  | -         |
| imgUrl       | *type 为 modal 或 image 时显示的图片* | string  | -                                  | -         |
| show         | *是否显示*                            | boolean | *`true`*,*`false`*                 | *`false`* |
| loadingError | *type 为 line 时设置，加载失败*       | boolean | *`true`*,*`false`*                 | *`false`* |
| noMore       | *type 为 line 时设置，没有更多了*     | boolean | *`true`*,*`false`*                 | *`false`* |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/loading/index" height="568" width="375"></iframe>
</div>
