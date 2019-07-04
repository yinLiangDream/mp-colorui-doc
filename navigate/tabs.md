****

### 使用说明

```jsx
import ClTabs from 'mp-colorui'
```



### 一般用法

### tab 排列类型

```jsx
<ClTabs type='center' ></ClTabs>
```

### 背景色

```jsx
<ClTabs bgColor='black' ></ClTabs>
```

### 激活的颜色

```jsx
<ClTabs activeColor='white' ></ClTabs>
```

### 默认激活的索引

```jsx
<ClTabs active={0} ></ClTabs>
```





## 参数说明

### Tabs 参数

| 参数        | 说明           | 类型   | 可选值                                          | 默认值      |
| ----------- | -------------- | ------ | ----------------------------------------------- | ----------- |
| type        | *tabs类型选择* | String | *`default`*,*`center`*,*`verb`*                 | *`default`* |
| bgColor     | *背景色*       | String | 参考文档 [默认色](/home/color)                  | -           |
| activeColor | *激活的颜色*   | String | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`black`*   |
| active      | *激活的下标*   | Number | -                                               | 0           |
| tabs        | *tab 数组*     | tabs[] | [详情](/navigate/tabs?id=tabs)                  | []          |



### tabs

| 参数 | 说明   | 类型   | 可选值                                             | 默认值 |
| ---- | ------ | ------ | -------------------------------------------------- | ------ |
| text | *标题* | String | -                                                  | -      |
| icon | *图标* | String | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -      |



### Tabs 事件

| 事件名称 | 说明       | 参数返回 |
| -------- | ---------- | -------- |
| onClick  | *点击事件* | index    |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准，如果您的浏览器无法访问，请使用 Chrome</div>
<iframe style="border: 1px solid antiquewhite" src="https://118.25.36.24/#/pages/components/tabs/index" height="568" width="375"></iframe>
</div>
