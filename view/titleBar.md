****

## 使用说明

```jsx
import {ClTitleBar} from 'mp-colorui'
```



## 一般用法

### 背景色

```jsx
<ClTitleBar bgColor='black' />
```

### 文字颜色

```jsx
<ClTitleBar textColor='white' />
```

### 子标题类型

```jsx
<ClTitleBar type='border-title' />
```



## 参数说明

### TitleBar 参数

| 参数          | 说明                                     | 类型    | 可选值                                             | 默认值           |
| ------------- | ---------------------------------------- | ------- | -------------------------------------------------- | ---------------- |
| bgColor       | *标题栏背景色*                           | string  | 参考文档 [默认色](/home/color)                     | *`white`*        |
| textColor     | *文字颜色*                               | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)    | *`green`*        |
| type          | *子标题类型*                             | string  | *`border-title`*,*`sub-title`*,*`icon`*            | *`border-title`* |
| subTitle      | *子标题，仅 type 为 sub-title时设置*     | string  | -                                                  | -                |
| subTitleColor | *子标题颜色*                             | string  | 参考文档 [默认色-标准色](/home/color?id=标准色)    |                  |
| borderColor   | *子边线，仅 type 为 border-title 时设置* | string  | 参考文档 [默认色](/home/color)                     | *`green`*        |
| borderLong    | *子边线长度*                             | number  | -                                                  | 20               |
| icon          | *仅 type 为 icon 时设置，图标*           | string  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | -                |
| iconColor     | *图标颜色*                               | string  | 参考文档 [Icon-*iconName*](/base/icon?id=iconname) | *`green`*        |
| title         | *标题*                                   | string  | -                                                  | -                |
| renderRight   | *标题栏右侧自定义渲染*                   | Element | -                                                  | -                |


<div style="position: fixed; right:10px; top: 5%">
<div style="width: 355px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; font-size: 12px; color: lightcoral">网页预览可能会有些许问题，请使用手机扫二维码预览。</div>
<iframe style="border: 1px solid antiquewhite" src="https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/titleBar/index" height="568" width="375"></iframe>
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
					text: "https://yinliangdream.github.io/mp-colorui-h5-demo/#/pages/components/titleBar/index",
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
