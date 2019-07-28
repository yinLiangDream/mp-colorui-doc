****

## 使用说明

```jsx
import {ClInput} from 'mp-colorui'
```



## 一般用法

### 输入框默认值

```jsx
<ClInput value='我是内容' />
```

### 输入框占位符

```jsx
<ClInput placeholder='请输入内容' />
```

### 输入类型

```jsx
<ClInput type='number' placeholder='我只能输入数字' />
```

### 最大长度设置

```jsx
<ClInput maxLength='140' placeholder='我最大只能输入 140 个字符' />
```

### 禁止输入

```jsx
<ClInput disabled />
```

### 键盘弹起时，自动上推页面

```jsx
<ClInput adjustPosition />
```





## 参数说明

### Input 参数

| 参数              | 说明                                     | 类型    | 可选值                                                      | 默认值    |
| ----------------- | ---------------------------------------- | ------- | ----------------------------------------------------------- | --------- |
| type              | *输入框类型*                             | string  | *`text`*,*`number`*,*`password`*,<br />*`idcard`*,*`digit`* | *`text`*  |
| title             | *输入框标题*                             | string  | -                                                           | -         |
| maxLength         | *最大输入长度*                           | number  | -                                                           | *-1*      |
| disabled          | *禁止输入*                               | boolean | *`true`*,*`false`*                                          | *`false`* |
| adjustPosition    | *键盘弹起时，是否自动上推页面*           | boolean | *`true`*,*`false`*                                          | *`false`* |
| icon              | *输入框后置icon*                         | Object  | 参考文档 [Icon-*Icon* 参数](/base/icon?id=icon-参数)        | {}        |
| button            | *输入框后置按钮*                         | Object  | 参考文档 [button-Button 参数](/base/button?id=button-参数)  | {}        |
| image             | *输入框后置图片 url*                     | string  | -                                                           | -         |
| renderCustomRight | *自定义按钮右边的内容，请传入自定义内容* | Element | -                                                           | -         |

### Input 事件

| 事件名称     | 说明                       | 参数返回   |
| ------------ | -------------------------- | ---------- |
| onIconClick  | *输入框后置icon的点击事件* | Event 对象 |
| onImageClick | *输入框后置图片点击事件*   | Event 对象 |
| onChange     | *输入框内容改变时触发*     | value      |
| onBlur       | *失去焦点时触发*           | value      |
| onFocus      | *获得焦点时触发*           | value      |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/input/index" height="568" width="375"></iframe>
<div>
		<p>H5 演示</p>
		<div id='qrcode'></div>
	</div>
</div>

<script>
	new Vue({
		el: '#main',
		mounted() {
			setTimeout(() => {
				const id = document.getElementById("qrcode");
				new QRCode(id, {
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/input/index",
					width: 128,
					height: 128,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
			});
		}
	})
</script>
