****

## 使用说明

```jsx
import {ClProgress} from 'mp-colorui'
```



## 一般用法

### 进度条形状

```jsx
<ClProgress shape='round' />
```

### 进度条背景色

```jsx
<ClProgress bgColor='black' />
```

### 进度条动画

```jsx
<ClProgress animation />
```

### 进度条条纹

```jsx
<ClProgress stripe />
```

### 进度条百分比

```jsx
<ClProgress percent={60} />
```



## 参数说明

### Progress 参数

| 参数      | 说明                             | 类型    | 可选值                          | 默认值     |
| --------- | -------------------------------- | ------- | ------------------------------- | ---------- |
| shape     | *进度条形状*                     | string  | *`normal`*,*`radius`*,*`round`* | *`normal`* |
| bgColor   | *进度条背景色*                   | string  | 参考文档 [默认色](/home/color)  | *`blue`*   |
| size      | *进度条大小设置*                 | string  | *`normal`*,*`small`*,*`xsmall`* | *`normal`* |
| stripe    | *进度条条纹（渐变色无条纹效果）* | string  | *`true`*,*`false`*              | *`false`*  |
| animation | *进度条动画*                     | boolean | *`true`*,*`false`*              | *`false`*  |
| percent   | *进度条百分比*                   | number  | 0-100                           | 0          |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral"><p>请使用手机扫二维码预览。</p>
	<button id='showDemo'> 隐藏/显示 </button></div>
<iframe id='iframe' style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/progress/index" height="568" width="320"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/progress/index",
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
