****

## 使用说明

```jsx
import ClRadio from 'mp-colorui'
```



## 一般用法

### 单选框表现形式

```jsx
<ClRadio type='form' />
```

### 单选框排列方向

```jsx
<ClRadio direction='vertical' />
```

### 单选框形状

```jsx
<ClRadio shape='radio' />
```

### 选中颜色

```jsx
<ClRadio color='black' />
```



## 参数说明

### Radio 参数

| 参数         | 说明                    | 类型         | 可选值                                          | 默认值       |
| ------------ | ----------------------- | ------------ | ----------------------------------------------- | ------------ |
| type         | *单选框类型*            | String       | *`normal`*,*`form`*,*`list`*                    | *`normal`*   |
| direction    | *单选框方向*            | String       | *`vertical`*,*`horizontal`*                     | *`vertical`* |
| shape        | *单选框形状*            | String       | *`normal`*,*`radio`*                            | *`normal`*   |
| title        | *type 为 form 时的标题* | String       | -                                               | -            |
| color        | *选中颜色*              | String       | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`green`*    |
| checkedValue | 选中的 Value 值         | String       | -                                               | -            |
| radioGroup   | *单选框组*              | radioGroup[] | [详情](/form/radio?id=radiogroup)               | []           |

### radioGroup

| 参数  | 说明                 | 类型   | 可选值 | 默认值 |
| ----- | -------------------- | ------ | ------ | ------ |
| key   | *选项框的显示标题*   | String | -      | -      |
| value | *选中的时的传递的值* | String | -      | -      |



### Radio 事件

| 事件名称 | 说明               | 参数返回 |
| -------- | ------------------ | -------- |
| onChange | *选项发生改变事件* | value    |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，由于域名问题，暂时无法访问网页版，会尽快修复。</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/radio/index" height="568" width="375"></iframe>
</div>
