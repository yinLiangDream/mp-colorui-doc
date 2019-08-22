## 使用说明

```js
import { ClDivider } from 'mp-colorui'
```



## 一般用法



### 基本用法

```jsx
<ClDivider>我是分割线</ClDivider>
```

### 颜色

```jsx
<ClDivider color='blue'>我是分割线</ClDivider>
```

### 大小

```jsx
<ClDivider size='large'>我是分割线</ClDivider>
```





## 参数说明

### Divider 参数说明

| 参数  | 说明       | 类型   | 可选值                                                       | 默认值     |
| ----- | ---------- | ------ | ------------------------------------------------------------ | ---------- |
| size  | *文字大小* | string | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*,*`xxlarge`*,<br />*`slarge`*,*`xslarge`* | *`normal`* |
| color | *颜色*     | string | 参考文档 [默认色-标准色](/home/color?id=标准色)              | *`grey`*   |

<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览可能会有些许问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/divider/index" height="568" width="316"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/divider/index",
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
