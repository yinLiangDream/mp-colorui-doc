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

### multiSelector

### time

### date

### region



### Select 事件

