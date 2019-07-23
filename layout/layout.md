****

## 使用说明

```jsx
import ClLayout from 'mp-colorui'
```



## 一般用法

### 浮动

```jsx
<ClLayout float='left' ></ClLayout>
```

### 内边距

```jsx
<ClLayout padding='normal' paddingDirection='around' ></ClLayout>
```

### 外边距

```jsx
<ClLayout margin='normal' marginDirection='round' ></ClLayout>
```



## 参数说明

### Layout 参数

| 参数             | 说明                             | 类型   | 可选值                                                       | 默认值     |
| ---------------- | -------------------------------- | ------ | ------------------------------------------------------------ | ---------- |
| float            | *浮动方向， 默认不浮动*          | string | *`left`*,*`right`*                                           | -          |
| padding          | *padding 距离，默认没有 padding* | string | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*   | -          |
| paddingDirection | *padding 方向*                   | string | *`around`*,*`horizontal`*,*`vertical`*,<br />*`left`*,*`right`*,*`top`* | *`around`* |
| margin           | *margin 距离，默认没有 margin*   | string | *`xsmall`*,*`small`*,*`normal`*,<br />*`large`*,*`xlarge`*   | -          |
| marginDirection  | *margin 方向*                    | string | *`around`*,*`horizontal`*,*`vertical`*,<br />*`left`*,*`right`*,*`top`* | *`around`* |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页端目前还未完全适配，请以小程序端为准。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/layout/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/layout/index",
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
