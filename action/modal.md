****

## 使用说明

```jsx
import ClModal from 'mp-colorui'
```



## 一般用法

### 显示模态框

```jsx
<ClModal show >我是内容</ClModal>
```

### 设置标题

```jsx
<ClModal title='我是标题' >我是内容</ClModal>
```

### 设置右上角关闭按钮

```jsx
<ClModal close >我是内容</ClModal>
```

### 设置点击遮罩层关闭

```jsx
<ClModal closeWithShadow >我是内容</ClModal>
```

### 自定义操作栏

```jsx
const action = <ClButton>点我</ClButton>

<ClModal renderAction={action} >我是内容</ClModal>
```

### 自定义标题栏

```jsx
const title = <View>我是标题</View>
      
<Clmodal renderTitle={title} >我是内容</Clmodal>
```



## 参数说明

### Modal 参数

| 参数            | 说明                   | 类型      | 可选值                                               | 默认值    |
| --------------- | ---------------------- | --------- | ---------------------------------------------------- | --------- |
| show            | *是否显示*             | Boolean   | *`true`*,*`false`*                                   | *`false`* |
| title           | 标题                   | String    | -                                                    | -         |
| close           | *是否显示关闭按钮*     | Boolean   | *`true`*,*`false`*                                   | *`true`*  |
| custom          | *是否自定义整个 modal* | Boolean   | *`true`*,*`false`*                                   | *`false`* |
| closeWithShadow | *点击阴影关闭*         | Boolean   | *`true`*,*`false`*                                   | *`false`* |
| titleBgColor    | *标题栏背景色*         | String    | 参考文档 [默认色](/home/color)                       | -         |
| actionColor     | *操作栏颜色*           | String    | 参考文档 [默认色](/home/color)                       | -         |
| padding         | *padding 距离*         | String    | *`xsmall`*,*`small`*,*`normal`*,*`large`*,*`xlarge`* | -         |
| actions         | *操作栏操作组*         | actions[] | [详情](/action/modal?id=actions)                     | []        |
| renderAction    | *自定义操作栏*         | Element   | -                                                    | -         |
| renderTitle     | *自定义标题栏*         | Element   | -                                                    | -         |

### actions

| 参数  | 说明          | 类型   | 可选值                                          | 默认值 |
| ----- | ------------- | ------ | ----------------------------------------------- | ------ |
| text  | *action 文字* | String | -                                               | -      |
| color | *action 颜色* | String | 参考文档 [默认色-标准色](/home/color?id=标准色) | -      |



### Modal 事件

| 事件名称 | 说明                 | 参数返回                   |
| -------- | -------------------- | -------------------------- |
| onClick  | *操作栏点击事件*     | index，index为操作栏第几个 |
| onCancel | *点击 阴影 关闭事件* | -                          |
| onClose  | *点击 关闭 关闭事件* | -                          |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://www.yysssl.com.cn/#/pages/components/modal/index" height="568" width="300"></iframe>
</div>
