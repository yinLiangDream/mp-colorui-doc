****

## 使用说明

```jsx
import ClSearchBar from 'mp-colorui'
```



## 一般用法

### 搜索栏形状

```jsx
<ClSearchBar shape='round' />
```

### 占位符设置

```jsx
<ClSearchBar placeholder='请输入内容' />
```

### 固定顶端

```jsx
<ClSearchBar fix />
```

### 功能图标组

```jsx
<ClSearchBar leftIcons={['round', 'close']} />
```





## 参数说明

### SearchBar 参数

| 参数             | 说明                            | 类型   | 可选值                                                       | 默认值     |
| ---------------- | ------------------------------- | ------ | ------------------------------------------------------------ | ---------- |
| shape            | *搜索栏的形状*                  | string | *`radius`*,*`round`*                                         | *`radius`* |
| placeholder      | *占位内容*                      | string | -                                                            | -          |
| fix              | *是否固定最上端*                | string | *`true`*,*`false`*                                           | *`false`*  |
| searchType       | *搜索框右边显示的内容的类型*    | string | *`button`*,*`text`*,*`none`*,*`list`*                        | *`button`* |
| leftIcons        | *左边的图标组*                  | icon[] | 参考文档 [Icon-*iconName*](/base/icon?id=iconname)           | []         |
| bgColor          | *背景色*                        | string | 参考文档 [默认色](/home/color)              | -          |
| rightButtonColor | *右侧按钮颜色*                  | string | 参考文档 [默认色](/home/color)              | *`white`*  |
| rightTextColor   | *type 为 text 时，右侧文字颜色* | string | 参考文档 [默认色-标准色](/home/color?id=标准色) | *`black`*  |

### SearchBar 事件

| 事件名称    | 说明           | 参数返回                           |
| ----------- | -------------- | ---------------------------------- |
| onIconClick | *图标点击事件* | index，*参数 index 为第几个图标*   |
| onSearch    | *搜索事件*     | value，*参数 value 为输入的数内容* |
| onInput     | *键盘输入事件* | value，*参数 value 为输入的数内容* |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/searchBar/index" height="568" width="375"></iframe>
</div>
