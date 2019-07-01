****

## 使用说明

```jsx
import ClSelect from 'mp-colorui'
```



## 一般用法

### 多列选择

```jsx
<ClSelect mode='mutiSelector' />
```

### 标题

```jsx
<ClSelect title='选择器' />
```

### 禁止选择

```jsx
<ClSelect disabled />
```



## 参数说明

### Select 参数

| 参数          | 说明                           | 类型    | 可选值                                                       | 默认值       |
| ------------- | ------------------------------ | ------- | ------------------------------------------------------------ | ------------ |
| title         | *标题*                         | String  | -                                                            | -            |
| disabled      | *是否禁止选择*                 | Boolean | *`true`*,*`false`*                                           | *`false`*    |
| mode          | *选择类型*，                   | String  | *`selector`*,*`multiSelector`*,<br />*`time`*,*`date`*,*`region`* | *`selector`* |
| selector      | *mode 为 selector 时设置*      | Object  | [详情](/form/select?id=selector)                             | {}           |
| multiSelector | *mode 为 multiSelector 时设置* | Object  | [详情](/form/select?id=multiSelector)                        | {}           |
| time          | *mode 为 time 时设置*          | Object  | [详情](/form/select?id=time)                                 | {}           |
| date          | *mode 为 date 时设置*          | Object  | [详情](/form/select?id=date)                                 | {}           |
| region        | *mode 为 region 时设置*        | Object  | [详情](/form/select?id=region)                               | {}           |



### selector

| 参数     | 说明                                                         | 类型            | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | --------------- | ------ | ------ |
| range    | *每一项*                                                     | Object/String[] | -      | []     |
| rangeKey | *若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key* | String          | -      | -      |
| value    | *默认选中的位置*                                             | Number          | -      | 0      |



### multiSelector

| 参数     | 说明                                                         | 类型            | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | --------------- | ------ | ------ |
| range    | *每一项*                                                     | Object/String[] | -      | []     |
| rangeKey | *若 range 每一项为 Object 类型，则此属性为对应要显示内容的 key* | String          | -      | -      |
| value    | *默认选中的位置*                                             | Number[]        | -      | [0, 0] |



### time

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| value | *选中的值* | String | -      | 00:00  |
| start | *开始时间* | String | -      | 00:00  |
| end   | *结束时间* | String | -      | 23:59  |



### date

| 参数   | 说明           | 类型   | 可选值                     | 默认值  |
| ------ | -------------- | ------ | -------------------------- | ------- |
| value  | *选中的值*     | String | -                          | -       |
| start  | *开始日期*     | String | -                          | -       |
| end    | *结束日期*     | String | -                          | -       |
| fields | *日期选择精度* | String | *`year`*,*`month`*,*`day`* | *`day`* |



### region

| 参数       | 说明                                 | 类型     | 可选值 | 默认值                       |
| ---------- | ------------------------------------ | -------- | ------ | ---------------------------- |
| value      | *选中的值*                           | String[] | -      | ['北京市','北京市','东城区'] |
| customItem | *可为每一列的顶部添加一个自定义的项* | String   | -      | -                            |



### Select 事件

| 事件名称       | 说明             | 参数返回   |
| -------------- | ---------------- | ---------- |
| onChange       | *选项改变时触发* | Event 对象 |
| onCancel       | *取消选择时触发* | Event 对象 |
| onColumnChange | *多列改变时触发* | Event 对象 |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://www.yysssl.com.cn/#/pages/components/select/index" height="568" width="300"></iframe>
</div>
