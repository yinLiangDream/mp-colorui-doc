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
| type         | *loading 类型*                        | String  | *`bar`*,*`modal`*,*`bar`*,*`line`* | *`bar`*   |
| bgColor      | *背景色*                              | String  | 参考文档 [默认色](/home/color)     | *`blue`*  |
| modalText    | *type 为 modal 时显示的文字*          | String  | -                                  | -         |
| imgUrl       | *type 为 modal 或 image 时显示的图片* | String  | -                                  | -         |
| show         | *是否显示*                            | Boolean | *`true`*,*`false`*                 | *`false`* |
| loadingError | *type 为 line 时设置，加载失败*       | Boolean | *`true`*,*`false`*                 | *`false`* |
| noMore       | *type 为 line 时设置，没有更多了*     | Boolean | *`true`*,*`false`*                 | *`false`* |

