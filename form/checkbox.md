****

## 使用说明

```jsx
import ClCheckbox from 'mp-colorui'
```



## 一般用法

### 复选框类型

```jsx
<ClCheckbox type='form' />
```

### 复选框颜色

```jsx
<ClCheckbox color='blue' />
```

### 复选框排列方向

```jsx
<ClCheckbox direction='vertical' />
```





## 参数说明

### Checkbox 参数

| 参数          | 说明                          | 类型            | 可选值                                          | 默认值       |
| ------------- | ----------------------------- | --------------- | ----------------------------------------------- | ------------ |
| title         | *form 类型下，复选框标题设置* | String          | -                                               | -            |
| type          | *复选框类型选择*              | String          | *`normal`*,*`form`*                             | *`normal`*   |
| shape         | *复选框形状设置*              | String          | *`normal`*,*`round`*                            | *`normal`*   |
| color         | *复选框选中色设置*            | String          | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*    |
| direction     | *复选框排列类型*              | String          | *`vertical`*,*`horizontal`*                     | *`vertical`* |
| checkboxGroup | *复选框每一项设置*            | checkboxGroup[] | [详情](/form/checkbox?id=checkboxgroup)         | []           |

### checkboxGroup

| 参数    | 说明                                        | 类型    | 可选值             | 默认值    |
| ------- | ------------------------------------------- | ------- | ------------------ | --------- |
| checked | *是否选中*                                  | Boolean | *`true`*,*`false`* | *`false`* |
| key     | *复选框的 key 设置，显示于复选框外*         | String  | -                  | -         |
| value   | *复选框的 value 设置，该参数为选中时的参数* | String  | -                  | -         |



### Checkbox 事件

| 事件名称 | 说明             | 参数返回 |
| -------- | ---------------- | -------- |
| onChange | *选择改变时触发* | value[]  |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border-radius: 30px; border: 1px solid antiquewhite" src="https://www.yysssl.com.cn/#/pages/components/checkbox/index" height="568" width="300"></iframe>
</div>
