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

### 子元素固定尺寸参数说明

用法：

```jsx
<ClFlex>
	<View className="basis-xs"></View>
</ClFlex>
```



| 参数     | 说明 |
| -------- | ---- |
| basis-xs | 20%  |
| basis-sm | 40%  |
| basis-df | 50%  |
| basis-lg | 60%  |
| basis-xl | 80%  |

### 子元素比例参数说明

用法：

```jsx
<ClFlex>
	<View className="flex-sub"></View>
  <View className="flex-twice"></View>
</ClFlex>
```

| 参数        | 说明 |
| ----------- | ---- |
| flex-sub    | 1    |
| flex-twice  | 2    |
| flex-treble | 3    |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 300px; color: lightcoral; font-size: 12px; word-break: break-all; white-space: normal; display: flex;justify-content: center">网页端目前还未完全适配，请以小程序端为准</div>
<iframe style="border: 1px solid antiquewhite" src="https://www.yysssl.com.cn/#/pages/components/flex/index" height="568" width="375"></iframe>
</div>
