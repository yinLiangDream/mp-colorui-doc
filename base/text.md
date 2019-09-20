****

## 使用指南

```js
import { ClText } from 'mp-colorui'
```

## 一般用法

### 文字大小

```jsx
<ClText size='normal'>文案</ClText>
```

### 文字颜色

```jsx
<ClText textColor='blue'>文案</ClText>
```

### 文字底色

```jsx
<ClText bgColor='blue'>文案</ClText>
```

### 超出显示省略号

```jsx
<ClText cut>文案</ClText>
```

### 文字对齐

```jsx
<ClText align='left'>文案</ClText>
```

### 特殊

```jsx
<ClText special='firstUpper'>文案</ClText>
```



## 参数说明

### Text 参数

| 参数      | 说明             | 类型    | 可选值                                                                                              | 默认值     |
| --------- | ---------------- | ------- | --------------------------------------------------------------------------------------------------- | ---------- |
| size      | *文字大小*       | string  | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*,*`xxlarge`*,<br />*`slarge`*,*`xslarge`* | *`normal`* |
| textColor | *文字颜色*       | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)                                                     | *`black`*  |
| bgColor   | *文字背景色*     | string  | 参考文档 [默认色](/home/color)                                                                      | -          |
| cut       | *是否显示省略号* | boolean | *`true`*,*`false`*                                                                                  | *`false`*  |
| align     | *文字对齐方式*   | string  | *`left`*,*`center`*,*`right`*                                                                       | *`left`*   |
| special   | *特殊需求*       | string  | *`firstUpper`*,*`upper`*,*`lower`*                                                                  | -          |
| text      | 文字内容         | string  | -                                                                                                   | -          |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/text/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/text/index",
					width: 128,
					height: 128,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
				document.querySelector('#showDemo').onclick = function() {
					document.querySelector('#iframe').style.visibility = document.querySelector('#iframe').style.visibility === 'hidden' ? '' : 'hidden';
				}
			});
		}
	})
</script>
