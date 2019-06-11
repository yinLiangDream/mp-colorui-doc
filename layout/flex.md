## 使用说明

```jsx
import ClFlex from 'mp-colorui'
```



## 一般用法

### 水平方向排列方式

```jsx
<ClFlex justify='center' ></ClFlex>
```

### 垂直方向排列方式

```jsx
<ClFlex align='center' ></ClFlex>
```

### 换行

```jsx
<ClFlex wrap ></ClFlex>
```



## 参数说明

### Flex 参数

| 参数    | 说明               | 类型    | 可选值                                              | 默认值    |
| ------- | ------------------ | ------- | --------------------------------------------------- | --------- |
| justify | *水平方向排列方式* | String  | *`start`*,*`end`*,*`center`*,*`between`*,*`around`* | *`start`* |
| align   | *垂直方向排列方式* | String  | *`start`*,*`end`*,*`center`*                        | *`start`* |
| wrap    | *换行*             | Boolean | *`true`*,*`false`*                                  | *`false`* |

